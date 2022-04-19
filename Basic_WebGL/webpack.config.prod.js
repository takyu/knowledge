const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const entries = WebpackWatchedGlobEntries.getEntries(
  [path.resolve(__dirname, './src/ts/**/*.ts')],
  {
    ignore: [
      path.resolve(__dirname, './src/ts/**/_*.ts'),
      path.resolve(__dirname, './src/ts/**/@types/*.d.ts'),
    ],
  }
)();

const htmlGlobPlugins = (entries, srcPath) => {
  return Object.keys(entries).map(
    (key) =>
      new HtmlWebpackPlugin({
        inject: 'body',
        filename: `html/${key}.html`,
        template: `${srcPath}/${key}.html`,
        chunks: [key],
        minify: true,
        scriptLoading: 'blocking',
      })
  );
};

module.exports = {
  mode: 'production',

  context: path.resolve(__dirname, 'src'),

  entry: entries,

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].bundle.js',
    publicPath: 'auto',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      /* {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader'],
      }, */

      // use ts-shader-loader
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        loader: 'ts-shader-loader',
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
        default: false,
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '/src', 'index.html'),
      minify: true,
      inject: false,
    }),
    ...htmlGlobPlugins(entries, './html'),
    new CopyPlugin({
      patterns: [
        {
          from: `${__dirname}/src/img`,
          to: `${__dirname}/dist/img`,
        },
      ],
    }),
  ],

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },

  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    buildDependencies: {
      config: [__filename],
    },
  },
};

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

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
  console.log(entries);
  return Object.keys(entries).map(
    (key) =>
      new HtmlWebpackPlugin({
        inject: 'body',
        filename: `html/${key}.html`,
        template: `${srcPath}/${key}.html`,
        chunks: [key],
        minify: false,
        scriptLoading: 'blocking',
      })
  );
};

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, 'src'),

  entry: entries,

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'assets/images/[name].[contenthash][ext]',
    publicPath: 'auto',
  },

  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
      },
      {
        directory: __dirname,
        publicPath: '/',
      },
    ],

    open: {
      app: {
        name: 'Google Chrome',
        // arguments: ["--incognito", "--new-window"],
      },
    },
    port: 3124,
    hot: true,
    compress: true,
    watchFiles: ['src/**/*'],
  },

  devtool: 'eval',

  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },

      // Using Babel.
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },

      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader'],
      },

      // don't use because of not reading glslify.
      // {
      //   test: /\.(glsl|vs|fs|vert|frag)$/,
      //   exclude: /node_modules/,
      //   loader: 'ts-shader-loader',
      // },

      // Asset Modules
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
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
      minify: false,
      inject: false,
    }),
    ...htmlGlobPlugins(entries, './html'),
  ],

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@shader': path.resolve(__dirname, 'src/shader'),
      '@img': path.resolve(__dirname, 'src/img'),
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

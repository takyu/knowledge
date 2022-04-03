/**
 * サードパーティー製の javascript のファイル
 * そのままでは、ts ファイルにて読み込みがされない
 * → @types/third_party_library_name をインストールする
 *
 * これは、import 時のパスエラーを無くすだけでなく、
 * サードパーティー製のメソッド等の補完機能もサポートしてくれる。
 */

/**
 * lodash
 *
 * ここでは、@types/lodash をインストール
 */
console.log('%c ****  lodash  ****', 'font-size:1.5em;');

import _ from 'lodash';

console.log(_.shuffle([1, 2, 3]));

console.log('%c ****  class-transformer  ****', 'font-size:1.5em;');
/**
 * class-transformer
 *
 * GitHub
 * (https://github.com/typestack/class-transformer#plaintoclass)
 */
import 'reflect-metadata';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Product } from './models/product';

const p1 = new Product('banana', 100);
console.log(p1.getInformation());

// json ファイルをバックエンドで取得した場合を想定
const products = [
  {
    title: 'orange',
    price: 300,
  },
  {
    title: 'grape',
    price: 500,
  },
];

// 上記のデータをマニュアル的に処理
console.log('%c ↓↓ processing, manually ↓↓', 'font-size:1.2em; color: yellow;');

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// class-transformer を使って処理
console.log(
  '%c ↓↓ processing, by class-transformer ↓↓',
  'font-size:1.2em; color: yellow;'
);

const loadedProducts2 = plainToInstance(Product, products);

loadedProducts2.forEach((prod) => {
  console.log(prod);
});

console.log('%c ****  class-validator  ****', 'font-size:1.5em;');
/**
 * class-validator
 *
 * GitHub
 * (https://github.com/typestack/class-validator)
 */
import { validate } from 'class-validator';

const newProd = new Product('', -100);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log('validation error.');
    errors.forEach((error) => {
      console.log(error);
    });
  } else {
    console.log(newProd.getInformation());
  }
});

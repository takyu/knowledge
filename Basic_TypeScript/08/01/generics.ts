/**
 * Generics
 *
 * 他の特定の型と結合された型、汎用型とも呼ばれる
 * 追加の方情報を切り替えて汎用的に利用できる
 *
 * [ 利用目的 ]
 * ・TypeScript における型の安全性を高めることができる
 * ・自動補完等の開発サポートを向上することができる
 *
 * Generics v.s Union
 *
 * - Generics
 *
 * ・ 関数やクラスを一つの型に固定したい場合に使う。
 *
 * - Union
 *
 * ・ 関数やメソッドを呼び出すごとに型を選べるようにしたい場合に使う。
 */
{
  /**
   * Array 型の Generics
   *
   * どんなデータ型を格納するのかを明記することができる
   */
  const names: Array<string> = []; // string[]
  const numbers: Array<number> = []; // number[]

  // string 型に対するメソッドが使える（ string 型の配列であると明示的にしているため）
  if (names[0]) {
    names[0].split(' ');
  }

  // number 型に対するメソッドが使える（ number 型の配列であると明示的にしているため）
  if (numbers[0]) {
    numbers[0].toFixed();
  }

  /**
   * Promise 型の Generics
   *
   * 非同期処理の実行に用いられる、es2015以降でのみ使用可
   *
   * どんなデータ型の値が返却されるのかを明記することができる
   */

  // 最終的に文字列型を返すことを示すために、Generics で示すことができる
  const promise = new Promise<string>((resolove, reject) => {
    setTimeout(() => {
      resolove('finish');
    }, 1000);
  });

  promise.then((data) => {
    // string 型の数値が返却されることがわかっているので、string 型のインスタンスメソッドが使える
    data.split(' ');

    // number 型の文字列が返却されることを想定していないので、number 型のインスタンスメソッドが使えない
    // data.toFixed();
  });

  // 最終的に数値型を返すことを示すために、Generics で示すことができる
  const promise2 = new Promise<number>((resolove, reject) => {
    setTimeout(() => {
      resolove(30.34);
    }, 1000);
  });

  promise2.then((data) => {
    // number 型の数値が返却されることがわかっているので、number 型のインスタンスメソッドが使える
    data.toFixed();

    // string 型の文字列が返却されることを想定していないので、string 型のインスタンスメソッドが使えない
    // data.split(' ');
  });

  /**
   * Interfaceでジェネリクス
   */
  interface IKeyPair<T, U> {
    key: T;
    value: U;
  }

  const kv1: IKeyPair<number, string> = {
    key: 1,
    value: 'Steve',
  };
  const kv2: IKeyPair<number, number> = {
    key: 100,
    value: 200,
  };
  const kv3: IKeyPair<string, string> = {
    key: 'Foo',
    value: 'hoge',
  };
  const kv4: IKeyPair<string, string[]> = {
    key: 'John',
    value: ['Dan', 'Jane'],
  };

  console.log('kv1');
  console.log(kv1);
  console.log('kv2');
  console.log(kv2);
  console.log('kv3');
  console.log(kv3);
  console.log('kv4');
  console.log(kv4);

  /**
   * type aliasでジェネリクス
   */
  type TKeyPair<T, U> = {
    key: T;
    value: U;
  };

  const kv5: TKeyPair<number, string> = {
    key: 1,
    value: 'Steve',
  };
  const kv6: TKeyPair<number, number> = {
    key: 100,
    value: 200,
  };
  const kv7: TKeyPair<string, string> = {
    key: 'Foo',
    value: 'hoge',
  };
  const kv8: TKeyPair<string, string[]> = {
    key: 'John',
    value: ['Dan', 'Jane'],
  };

  console.log('kv5');
  console.log(kv5);
  console.log('kv6');
  console.log(kv6);
  console.log('kv7');
  console.log(kv7);
  console.log('kv8');
  console.log(kv8);
}

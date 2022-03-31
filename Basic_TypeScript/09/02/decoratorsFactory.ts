{
  /**
   * 関数を返す関数を作成
   *
   */
  function Logger(logString: string) {
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }

  /**
   * デコレーター関数を返す関数を()をつけて実行
   *
   * → メリットとしてはその際に引数を持たせることができる
   * → デコレーター関数に値を渡せることができる
   */
  @Logger("outputing log.. in Person class")
  class Person {
    name = 'Mike';

    constructor() {
      console.log('creating Person object..');
    }
  }

  const person = new Person();

  console.log(person);
}

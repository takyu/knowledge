/**
 * class Decorators
 *
 * @function_name
 *
 * decorators は最終的にはただの関数
 * 多くのライブラリで、関数の始めは大文字なので慣習的に大文字にしている
 */
{
  function Logger(
    constructor: Function /* コンストラクタ関数（ここではPersonクラスのこと） */
  ) {
    console.log('outputing log..');
    console.log(constructor);

  }

  /**
   * クラスに対して decorator を使用
   * decorator はクラスが定義された時点で実行される
   *
   * この場合は、一つの引数を取る
   */
  @Logger
  class Person {
    name = 'Mike';

    constructor() {
      console.log('creating Person object..');
    }
  }

  const person = new Person();

  console.log(person);
}

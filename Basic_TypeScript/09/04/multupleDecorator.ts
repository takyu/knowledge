/**
 * multiple decorators
 *
 * 一つのクラスに対して、複数のデコレーターを適用できる
 */
{
  function Logger(logString: string) {
    console.log('Function Logger read as decorator.');
    return function (_: Function) {
      console.log(logString);
    };
  }

  function WithTemplate(template: string, hookId: string) {
    console.log('Function WithTemplate read as decorator.');
    return function (_: Function) {
      let hookEl = document.querySelector(hookId);

      if (hookEl) {
        hookEl.innerHTML = template;
        console.log('finished to write template by WithTemplate function');
      }
    };
  }

  /**
   * 複数のデコレーターを適用した場合、下から上に向かってデコレーター関数は実行される
   *
   * しかし、デコレーター関数の作成は、JSの仕様通り、上から下に向かって作成される。
   *
   * デコレータファクトリーによるデコレータ関数の作成 ( @Logger → @WithTemplate )
   * → デコレータ関数の実行 ( @WithTemplate → @Logger )
   */
  @Logger('Loading Person Class..')
  @WithTemplate('<h1>Person Object( Person Class )</h1>', '#app')
  class Person {
    constructor(public name: string) {
      console.log('creating Person object..');
    }
  }

  const person = new Person('John');
  console.log(person);
}

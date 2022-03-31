{
  function WithTemplate(template: string, hookId: string) {
    /**
     * ここでは、constructor 関数が使われない
     * → 引数で _ を指定することで、引数を受け取りはするが、使わない
     * ことを明示的にすることができる。
     */
    return function (_: Function /* constructor: Function */) {
      const hookEl = document.querySelector(hookId);

      if (hookEl) {
        hookEl.innerHTML = template;
      }
    };
  }

  @WithTemplate('<h1>Person Object( Person Class )</h1>', '#app')
  class Person {
    constructor(public name: string) {
      console.log('creating Person object..');
    }
  }

  /**
   * コメントアウトしてインスタンス化しなくても、
   * Person クラスを読み込んだ時点で関数が実行されている
   */
  const person = new Person('Mike');
  console.log(person);

  /**
   * デコレーター内で、コンストラクタ関数を実行し（インスタンス化）
   * そのオブジェクトを使って表示させる
   */
  function WithTemplateAndDisplayProperty(template: string, hookId: string) {
    return function (constructor: any) {
      const hookEl = document.querySelector(hookId);
      const p = new constructor('Dan');

      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.insertAdjacentText('beforeend', p.name);
      }
    };
  }

  @WithTemplateAndDisplayProperty(
    '<h1>Loaded Person2 Object. Hello, </h1>',
    '#app2'
  )
  class Person2 {
    constructor(public name: string) {
      console.log('creating Person2 object..');
    }
  }
}

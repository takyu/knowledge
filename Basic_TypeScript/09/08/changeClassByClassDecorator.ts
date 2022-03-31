/**
 *
 * クラスデコレータやメソッドデコレータ、アクセサデコレータは、値を返すことができる
 *
 * クラスデコレーターにより、新しいコンストラクター関数（新しいクラス）を返すことによって、
 * 元のオリジナルクラスを、新しいコンストラクター関数（新しいクラス）に書き換えることが可能
 *
 * オリジナルのクラスを拡張したい場合は、継承して super を使う
 */

{
  function WithTemplate(template: string, hookId: string) {
    console.log('loaded WithTemplate factory');

    /**
     * クラスを返す、つまりコンストラクタ関数を返す関数が
     * デコレーターによってクラス定義時に実行されるので、
     * クラスがインスタンス化されないと、発火しない。
     */
    return function <
      /**
       * オリジナルのクラス（コンストラクタ関数）を受け取らなければいけない
       *
       * {new} → とする事で、new を使ってオブジェクトを作れるもの、すなわちコンストラクタ関数
       * であることを明示的にできる。
       *
       * ...args: any[] → とする事で、コンストラクタ関数の引数に対して、
       * 柔軟な型を定義している。
       *
       * : {} → new の関数つまりコンストラクタ関数は何らかのオブジェクトを返す
       *
       * ここでは、person クラスに name プロパティがあるために、
       * { name: string } を返している。
       *
       */
      T extends { new (...args: any[]): { name: string } }
    >(originalConstructor: T) {
      /**
       * 元のクラスの定義を残しておきたいために、
       * 元のクラス（元のコンストラクタ関数）を継承している
       */
      return class extends originalConstructor {
        /**
         * 新しいコンストラクタ関数にもオリジナルのコンストラクタ関数（クラス）で渡された、
         * その引数を渡してあげる
         *
         * もしインスタンス化する際に引数を持たない場合、
         * _: any[] とする事で引数を未使用で問題がないことを明示的にする。
         */
        constructor(...args: any[]) {
          /**
           * オリジナルのコンストラクタ関数を実行
           *
           * 実行時に、name プロパティとなるバリューが渡されているので、
           * 引数に ...args をいれる
           */
          super(...args);

          // 新しく定義されたコンストラクタ関数
          console.log('Display template.');

          const hookEl = document.querySelector(hookId);

          if (hookEl) {
            hookEl.innerHTML = template;
            hookEl
              .querySelector('h1')!
              .insertAdjacentText('beforeend', this.name);
          }
        }
      };
    };
  }

  @WithTemplate('<h1>Created Person Object, Hello </h1>', '#app')
  class Person {
    constructor(public name: string) {
      console.log('creating object from Person class..');
    }
  }

  /**
   * コメントアウトすると、インスタンス化されていないので、
   * デコレータ関数が返すコンストラクタ関数が実行されないために
   * 表示されない。
   */
  // const p1 = new Person('John');
  // console.log(p1);
}

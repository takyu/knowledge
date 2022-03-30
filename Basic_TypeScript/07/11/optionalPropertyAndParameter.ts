{
  /**
   * 必須でないプロパティやメソッドには、
   * 変数名の後ろに「？」を付ける（オプショナル演算子）
   */
  interface Named {
    readonly firstName: string;
    lastName?: string;
  }

  interface Greetable extends Named {
    greet(phrase: string): void;
    goodBye?(phrase: string): void;
  }

  class Person implements Greetable {
    lastName?: string;
    age = 10;

    /**
     * 必須でないパラメーターには、
     * デフォルト引数をセットするか、オプショナル演算子をつける
     */
    constructor(readonly firstName: string, lastName?: string) {
      if (lastName) {
        this.lastName = lastName;
      }
    }

    greet(phrase: string) {
      if (this.lastName) {
        console.log(phrase + ' ' + this.firstName + ' ' + this.lastName);
      } else {
        console.log(phrase + ' ' + this.firstName);
      }
    }
  }

  const person = new Person('Mike');

  person.greet('Hello,');

  const person2 = new Person('Mike', 'Doe');

  person2.greet('Hello,');

  /**
   * ただし、interfaceとclass間には弱い関係しか保たれておらず、
   * 実際には、interfaceでオプショナル演算子をつけても、
   * classの方で必須プロパティにするといったことができる。
   */
}

{
  /**
   * interfaceがinterfaceを継承する際は、
   * 継承先のinterfaceに「extends」をつけて継承
   */

  interface Named {
    readonly name: string;
  }

  // interfaceの「Named」を継承
  interface Greetable extends Named {
    greet(phrase: string): void;
  }

  class Person implements Greetable {
    age = 30;

    constructor(readonly name: string) {}

    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  }

  interface Time {
    time: number;
  }

  // interfaceは複数継承ができる
  interface Greetable2 extends Named, Time {
    greet(phrase: string): void;
  }

  const person = new Person('Dan');

  person.greet('Good Morning');
}

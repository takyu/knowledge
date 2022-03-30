{
  /**
   * using interface to class
   *
   * インタフェースではアクセス修飾子を設定できないので、
   * classで修飾子を設定する
   */
  interface IStudent {
    firstName: string;
    lastName: string;

    fullName(): string;
  }

  class Student implements IStudent {
    /**
     * interfaceで書かれていないpropertyやmethodを定義することが可能
     *
     * ただし、interfaceで書かれたpropertyやmethodは必ず実装する
     */
    age: number = 30;

    constructor(public firstName: string, public lastName: string) {}

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const student = new Student('Daniel', 'John');
  console.log('student: ' + student.fullName());

  /**
   * readonlyをinterfaceで使っても反映されない（エラーにはならない）
   */
  interface IStudent2 {
    readonly firstName: string;
    lastName: string;
  }

  class Student2 implements IStudent2 {
    constructor(public firstName: string, public lastName: string) {}

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const student2 = new Student2('Tokyo', 'Taro');
  console.log('student2: ' + student2.fullName());

  // インタフェースのみだとアクセス可能
  student2.firstName = 'Osaka';
  console.log('student2: ' + student2.fullName());

  /**
   * readonlyを適用するにはクラス側で定義
   */
  interface IStudent3 {
    readonly firstName: string;
    lastName: string;
  }

  class Student3 implements IStudent3 {
    constructor(readonly firstName: string, public lastName: string) {}

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const student3 = new Student3('Daniel', 'Taro');
  console.log('student3: ' + student3.fullName());

  // エラー
  // student3.firstName = 'Hakase'

  interface Greetable {
    readonly name: string;

    greet(phrase: string): void;
  }

  class Person implements Greetable {
    readonly name: string;
    age: number = 30;

    constructor(n: string) {
      this.name = n;
    }

    greet(phrase: string): void {
      console.log(phrase + ' ' + this.name);
    }
  }

  const person = new Person('John');

  person.greet('Hello,');

  // person.name = 'Michael';

  // person.greet('Hello, ');
}

/**
 * constructor and this
 */
{
  class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const user = new Person('John', 'Doe');
  console.log('user1: ' + user.fullName());

  /**
   * オブジェクトのメソッドをオブジェクトからコピーした場合でも動作し、
   * 意図しない動作になってしまう。。
   */
  const userCopy = {
    fullName: user.fullName,
  };

  // undefined undefined
  console.log('userCopy: ' + userCopy.fullName());

  /**
   * クラスメソッドがクラスからインスタンス化されることを保証するために、
   * クラスメソッドの引数に「this: [class name]」を付けると、
   * コンパイル時に警告を出してくれる。
   */
  class Person2 {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    fullName(this: Person2): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const user2 = new Person2('John', 'Doe');
  console.log('user2: ' + user.fullName());

  /**
   * オブジェクトのメソッドをオブジェクトからコピーした場合でも動作し、
   * 意図しない動作になってしまう。。
   */
  const user2Copy = {
    fullName: user2.fullName,
  };

  // fullNameメソッドがPerson2クラスからインスタンス化されたものでは無いと警告
  // console.log('user2Copy: ' + user2Copy.fullName());

  // classと同じプロパティとメソッドを持たすと動作する
  const user2ReCopy = {
    firstName: 'aaa',
    lastName: 'bbb',
    fullName: user2.fullName,
  };

  console.log('user2ReCopy: ' + user2ReCopy.fullName());
}

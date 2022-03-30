/**
 * access operator
 *
 * public, private, protected, readonly
 *
 * デフォルトでは, public修飾子に指定
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

  // Personのプロパティは全てpublic修飾子
  user.firstName = 'Daniel';
  user.lastName = 'Maccatoni';
  console.log('user1: ' + user.fullName());

  /**
   * private
   *
   * プロパティやメソッドの変更を外部から受け付けない
   */
  class Person2 {
    private firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const user2 = new Person2('John', 'Doe');

  // エラー
  // user2.firstName = 'Daniel'

  user2.lastName = 'Maccatoni';
  console.log('user2: ' + user2.fullName());

  /**
   * protected
   *
   * 継承したクラスからのみアクセスすることができる
   */
  class Person3 {
    protected firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  class User extends Person3 {
    isAdmin: boolean;

    constructor(firstName: string, lastName: string, isAdmin: boolean) {
      super(firstName, lastName);
      this.isAdmin = isAdmin;
    }

    fullName(): string {
      return super.fullName();
    }

    yourFirstName(): void {
      console.log('Person3(method): ' + this.firstName);
    }
  }

  const user3 = new User('John', 'Doe', false);

  console.log('user3: ' + user3.fullName());

  // protectedのため継承先のクラスから名前を参照することができる
  user3.yourFirstName();

  // エラー； protected修飾子のために継承先の外部からは変えることができない
  // user3.firstName = 'Michel'

  /**
   * readonly
   */
  class Person4 {
    readonly firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    // エラー； readonlyなので上書きできない
    // setName(name: string): void {
    //   this.firstName = name
    // }
  }

  const user4 = new Person4('Michel', 'John');

  // readonlyのためエラー
  // user.setName('Jane')

  console.log('user4: ' + user4.fullName());
}

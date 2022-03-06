/**
 * class
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

  const user = new Person("John", "Doe");
  console.log("user1: " + user.fullName());

  /**
   * access operator
   *
   * public, private, protected, readonly
   *
   * デフォルトでは, public修飾子に指定
   */

  // Personのプロパティは全てpublic修飾子
  user.firstName = "Daniel";
  user.lastName = "Maccatoni";
  console.log("user1: " + user.fullName());

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

  const user2 = new Person2("John", "Doe");

  // エラー
  // user2.firstName = 'Daniel'

  user2.lastName = "Maccatoni";
  console.log("user2: " + user2.fullName());

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
      console.log("Person3(method): " + this.firstName);
    }
  }

  const user3 = new User("John", "Doe", false);

  console.log("user3: " + user3.fullName());

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

  const user4 = new Person4("Michel", "John");

  // readonlyのためエラー
  // user.setName('Jane')

  console.log("user4: " + user4.fullName());

  /**
   * class shortened hand
   */
  class PersonShort {
    constructor(public firstName: string, public lastName: string) {}

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const userShort = new PersonShort("John", "Michael");

  console.log("userShort: " + userShort.fullName());

  /**
   * using interface to class
   *
   * インタフェースではアクセス修飾子を設定できないので、
   * classで修飾子を設定する
   */
  interface IStudent {
    firstName: string;
    lastName: string;
  }

  class Student implements IStudent {
    constructor(public firstName: string, public lastName: string) {}

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const student = new Student("Daniel", "John");
  console.log("student: " + student.fullName());

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

  const student2 = new Student2("Tokyo", "Taro");
  console.log("student2: " + student2.fullName());

  // インタフェースのみだとアクセス可能
  student2.firstName = "Osaka";
  console.log("student2: " + student2.fullName());

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

  const student3 = new Student3("Daniel", "Taro");
  console.log("student3: " + student3.fullName());

  // エラー
  // student3.firstName = 'Hakase'

  /**
   * middleNameも使用
   */
  interface ITeacher {
    firstName: string;
    middleName: string;
    lastName: string;
    fullName(): string;
  }

  class Teacher implements ITeacher {
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(firstName: string, middleName: string, lastName: string) {
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
    }

    fullName(): string {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
  }

  const teacher = new Teacher("John", "M", "Doe");
  console.log("teacher: " + teacher.fullName());

  /**
   * 必須ではないプロパティに対しては?をつける
   *
   * property?
   */
  interface ITeacher2 {
    firstName: string;
    middleName?: string;
    lastName: string;
    fullName(): string;
  }

  class Teacher2 implements ITeacher2 {
    constructor(public firstName: string, public lastName: string) {}

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const teacher2 = new Teacher2("John", "Doe");
  console.log("teacher2: " + teacher2.fullName());

  /**
   * Interfaceに定義されているプロパティやメソッドは必ず設定するが、
   * interfaceに存在しないプロパティやメソッドをClassに追加することはできる
   */
  interface ITeacher3 {
    firstName: string;
    middleName?: string;
  }

  class Teacher3 implements ITeacher3 {
    constructor(public firstName: string, public lastName: string) {}

    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const teacher3 = new Teacher2("John", "Doe");
  console.log("teacher3: " + teacher2.fullName());

  /**
   * 複数のインターフェースを実装
   */
  interface Human {
    firstName: string;
    lastName: string;
  }

  interface Foreign {
    middleName: string;
  }

  class Foreign implements Human, Foreign {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}

    fullName(): string {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
  }

  const foreign = new Foreign("Daniel", "L", "John");
  console.log("foreign: " + foreign.fullName());
}

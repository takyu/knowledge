/**
 * interface
 *
 * オブジェクトやClassを構成するプロパティの名前と型を定義する
 */
{
  interface Person {
    firstName: string;
    lastName: string;
  }

  /**
   * function greeter(person: { firstName: string; lastName: string }) {
   *   return `Hello, ${person.firstName} ${person.lastName}`;
   * }
   *
   * 上がインタフェースを利用することによって引数が簡潔にかける
   */
  const greeter: (p: Person) => string = (p: Person): string => {
    return `hello, ${p.firstName} ${p.lastName}`;
  }

  let user: Person = {
    firstName: "Jane",
    lastName: "Doe",

    // Personインタフェースにプロパティが記入されていないためエラー
    // age: 35
  };

  console.log(greeter(user));

  // インタフェースに関数を持つ場合
  interface Person2 {
    firstName: string;
    lastName: string;
    greeting: (message: string) => string;
  }

  let user2: Person2 = {
    firstName: "John",
    lastName: "Smith",
    greeting(message) {
      return `${message} ${this.firstName} ${this.lastName}`;
    },
  };

  console.log(user2.greeting("Good morning,"));
}

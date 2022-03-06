/**
 * Type Alias
 */
type Name = string;

function greeting(name: Name) {
  return "Hello, " + name;
}
console.log("(Fn)greeting: " + greeting("Taro"));

// Error: 'Name' only refers to a type, but is being used as a value here.
// Name = number;

type Person = {
  firstName: string;
  lastName: string;
};

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
const jiro: Person = {
  firstName: "Jiro",
  lastName: "Tokyo",
};
console.log("(Fn)greeter: " + greeter(jiro));

/**
 * typeとinterface
 *
 * ・typeでは「=」、interfaceは要らない
 *
 * ・typeの最後にはセミコロンをつける必要があるが、
 *  interfaceでは最後にセミコロンをつける必要がない
 *
 * ・Interfaceはオブジェクトやクラスの型定義に利用
 *
 * ・型エイリアスはオブジェクトやクラスの型定義、
 *  リテラルのunion型などに別名をつけることができる
 *
 */

/**
 * interfaceでは同じ名前で定義することができ、
 * それらが使われる場合はマージされる
 * -> 「宣言のマージ」という
 *
 * ただし、同じプロパティ名で型が異なるとエラー
 */
interface Human {
  firstName: string;
  age: number;
}

interface Human {
  lastName: string;

  // エラー
  // age: string;
  age: number;
}

const user: Human = {
  firstName: "John",
  lastName: "Doe",
  age: 10,
};
console.log("user");
console.log(user);

/**
 * type aliasでは同じ名前ではマージされない。
 *
 * ただし、intersection型「&」を利用することで、同様の設定が可能
 */
type PersonFirst = {
  firstName: string;
};

type PersonLast = {
  lastName: string;
};

// intersection
type PersonIntersect = PersonFirst & PersonLast;

const user2: PersonIntersect = {
  firstName: "John",
  lastName: "Doe",
};
console.log("user2:");
console.log(user2);

/**
 * interfaceでは宣言のマージ以外にもextendsを利用して型を組み合わせることができる
 */
interface IPersonFirst {
  firstName: string;
}

interface IPersonLast {
  lastName: string;
}

interface IPerson extends IPersonFirst, IPersonLast {}

const user3: IPerson = {
  firstName: "John",
  lastName: "Doe",
};
console.log("user3:");
console.log(user3);

/**
 * リテラル型のユニオン
 */
type fruits = "apple" | "banana" | "lemon";
const fruit: fruits = "apple";
console.log("fruit: " + fruit);

/**
 * 関数型の型エイリアス
 *
 * const hello: (name: string) => string = (name: string): string =>
 *  `Hello ${name}`;
 */

type THelloFunc = (name: string) => void;

const tHello: THelloFunc = (name: string): string => `Hello ${name}`;

console.log("tHello: " + tHello("Daniel"));

/**
 * 関数型のインタフェース
 */

interface IHelloFunc {
  (name: string): string;
}

const iHello: IHelloFunc = (name: string): string => `Hello ${name}`;

console.log("iHello: " + iHello("Michael"));

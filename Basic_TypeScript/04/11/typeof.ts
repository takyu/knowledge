/**
 * typeof operator
 */
{
  let firstName = 'John';
  let price = 20;
  let user = {
    firstName: 'John',
    lastName: 'Doe',
  };

  console.log('typeof firstName: ' + typeof firstName);
  console.log("typeof 'Jane': " + typeof 'Jane');
  console.log('typeof 30: ' + typeof 30);
  console.log('typeof price: ' + typeof price);
  console.log('typeof user: ' + typeof user);

  /**
   * 型エイリアスに設定
   */

  // string
  type Name = typeof firstName;

  // number
  type Price = typeof price;

  // {firstName: string, lastName: string}
  type User = typeof user;

  const person: User = {
    firstName: 'Joh',
    lastName: 'Doe',

    // エラー
    // age: 30
  };

  console.log('person:');
  console.log(person);

  /**
   * リテラル型に変換
   *
   * リテラル型は、「任意に指定したリテラル(文字列リテラル、数値リテラル....)以外を許可しない型」
   */
  const user2 = {
    firstName: 'Daniel',
    lastName: 'Taro',
  } as const;

  type UserLiteral = typeof user2;

  /**
   * type UserLiteral = {
   *   readonly firstName: "John";
   *   readonly lastName: "Doe";
   * }
   */
  const person2: UserLiteral = { firstName: 'Daniel', lastName: 'Taro' };

  console.log('person2:');
  console.log(person2);

  /**
   * 配列にtypeof演算子を利用
   */
  const fruits = ['apple', 'banana', 'lemon'];
  type Fruit = typeof fruits; // type Fruit = string[]

  const fruitsNum = [10, 30, 200];
  type FruitNum = typeof fruitsNum; // type FruitNum = number[]

  const fruitsMix = [100, 'banana', 'lemon'];
  type FruitMix = typeof fruitsMix; // type FruitMix = (string | number)[]

  /**
   * as constとtypeofを利用することによって配列に含まれる要素のUnion type
   * を設定することができる
   */
  const fruitsUni = ['apple', 'banana', 'lemon'] as const;

  // type FruitsUni1 = readonly ["apple", "banana", "lemon"]
  type FruitsUni1 = typeof fruitsUni;

  // type FruitsUni2 = "apple" | "banana" | "lemon"
  type FruitsUni2 = typeof fruitsUni[number];
}

/**
 * Type Interface
 *
 * 型アノテーションによって型を明示的に指定しなくても
 * 型を推論してくれる機能
 */
{
  let greeting = "Hello";
  let greeting2: string = "Hello";

  console.log("greeting: " + greeting);
  console.log(typeof greeting);
  console.log("greeting2: " + greeting2);
  console.log(typeof greeting2);
  console.log("[greeting & greeting2] type equal?");
  console.log(typeof greeting === typeof greeting2);

  let age = 20;
  let age2: number = 20;

  console.log("[age & age2] type equal?");
  console.log(typeof age === typeof age2);

  let isAdmin = true;
  let isAdmin2: boolean = true;

  console.log("[isAdmin & isAdmin2] type equal?");
  console.log(typeof isAdmin === typeof isAdmin2);

  let fruits = ["apple", "banana", "lemon"];
  let fruits2: string[] = ["apple", "banana", "lemon"];

  console.log("[fruits & fruits2] type equal?");
  console.log(typeof fruits === typeof fruits2);

  /**
   * 配列に混ざった型が入ってる場合、
   * ユニオン型と判定され、特定の型のメソッドなどは実行できない
   */
  let person = ["Dan", 200];

  // エラーになる
  // person[0].toUpperCase();

  /**
   * 関数型のタイプインタフェース
   */

  // きちんと書くとこう
  const hello: (name: string) => void = (name: string): void => {
    console.log('Hello ' + name);
  }
  hello('Tom')

  // 型アノテーションで戻りの型は推論してれる
  const hello2 = (name: string) => {
    console.log('Hello2 ' + name);
  }
  hello2('Tom')
}

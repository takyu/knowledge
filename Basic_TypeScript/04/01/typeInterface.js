/**
 * Type Interface
 *
 * 型アノテーションによって型を明示的に指定しなくても
 * 型を推論してくれる機能
 */
{
    var greeting = "Hello";
    var greeting2 = "Hello";
    console.log("greeting: " + greeting);
    console.log(typeof greeting);
    console.log("greeting2: " + greeting2);
    console.log(typeof greeting2);
    console.log("[greeting & greeting2] type equal?");
    console.log(typeof greeting === typeof greeting2);
    var age = 20;
    var age2 = 20;
    console.log("[age & age2] type equal?");
    console.log(typeof age === typeof age2);
    var isAdmin = true;
    var isAdmin2 = true;
    console.log("[isAdmin & isAdmin2] type equal?");
    console.log(typeof isAdmin === typeof isAdmin2);
    var fruits = ["apple", "banana", "lemon"];
    var fruits2 = ["apple", "banana", "lemon"];
    console.log("[fruits & fruits2] type equal?");
    console.log(typeof fruits === typeof fruits2);
    /**
     * 配列に混ざった型が入ってる場合、
     * ユニオン型と判定され、特定の型のメソッドなどは実行できない
     */
    var person = ["Dan", 200];
    // エラーになる
    // person[0].toUpperCase();
    /**
     * 関数型のタイプインタフェース
     */
    // きちんと書くとこう
    var hello = function (name) {
        console.log('Hello ' + name);
    };
    hello('Tom');
    // 型アノテーションで戻りの型は推論してれる
    var hello2 = function (name) {
        console.log('Hello2 ' + name);
    };
    hello2('Tom');
}

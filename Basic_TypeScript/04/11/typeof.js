/**
 * typeof operator
 */
{
    var firstName = 'John';
    var price = 20;
    var user = {
        firstName: 'John',
        lastName: 'Doe',
    };
    console.log('typeof firstName: ' + typeof firstName);
    console.log("typeof 'Jane': " + typeof 'Jane');
    console.log('typeof 30: ' + typeof 30);
    console.log('typeof price: ' + typeof price);
    console.log('typeof user: ' + typeof user);
    var person = {
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
    var user2 = {
        firstName: 'Daniel',
        lastName: 'Taro',
    };
    /**
     * type UserLiteral = {
     *   readonly firstName: "John";
     *   readonly lastName: "Doe";
     * }
     */
    var person2 = { firstName: 'Daniel', lastName: 'Taro' };
    console.log('person2:');
    console.log(person2);
    /**
     * 配列にtypeof演算子を利用
     */
    var fruits = ['apple', 'banana', 'lemon'];
    var fruitsNum = [10, 30, 200];
    var fruitsMix = [100, 'banana', 'lemon'];
    /**
     * as constとtypeofを利用することによって配列に含まれる要素のUnion type
     * を設定することができる
     */
    var fruitsUni = ['apple', 'banana', 'lemon'];
}

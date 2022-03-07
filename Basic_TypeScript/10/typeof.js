/**
 * typeof operator
 */
{
    var firstName = "John";
    var price = 20;
    var user = {
        firstName: "John",
        lastName: "Doe"
    };
    console.log("typeof firstName: " + typeof firstName);
    console.log("typeof 'Jane': " + typeof "Jane");
    console.log("typeof 30: " + typeof 30);
    console.log("typeof price: " + typeof price);
    console.log("typeof user: " + typeof user);
    var person = {
        firstName: "Joh",
        lastName: "Doe"
    };
    /**
     * リテラル型に変換
     *
     * リテラル型は、「任意に指定したリテラル(文字列リテラル、数値リテラル....)以外を許可しない型」
     */
    var user2 = {
        firstName: 'Daniel',
        lastName: 'Taro'
    };
    var person2 = { firstName: 'Daniel', lastName: 'Taro' };
    console.log(person2);
}

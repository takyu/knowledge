/**
 * interface
 *
 * オブジェクトやClassを構成するプロパティの名前と型を定義する
 */
{
    /**
     * function greeter(person: { firstName: string; lastName: string }) {
     *   return `Hello, ${person.firstName} ${person.lastName}`;
     * }
     *
     * 上がインタフェースを利用することによって引数が簡潔にかける
     */
    var greeter = function (p) {
        return "hello, ".concat(p.firstName, " ").concat(p.lastName);
    };
    var user = {
        firstName: "Jane",
        lastName: "Doe"
    };
    console.log(greeter(user));
    var user2 = {
        firstName: "John",
        lastName: "Smith",
        greeting: function (message) {
            return "".concat(message, " ").concat(this.firstName, " ").concat(this.lastName);
        }
    };
    console.log(user2.greeting("Goodmorning,"));
}

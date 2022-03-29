{
    var Person = /** @class */ (function () {
        /**
         * 必須でないパラメーターには、
         * デフォルト引数をセットするか、オプショナル演算子をつける
         */
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.age = 10;
            if (lastName) {
                this.lastName = lastName;
            }
        }
        Person.prototype.greet = function (phrase) {
            if (this.lastName) {
                console.log(phrase + ' ' + this.firstName + ' ' + this.lastName);
            }
            else {
                console.log(phrase + ' ' + this.firstName);
            }
        };
        return Person;
    }());
    var person = new Person('Mike');
    person.greet('Hello,');
    var person2 = new Person('Mike', 'Doe');
    person2.greet('Hello,');
    /**
     * ただし、interfaceとclass間には弱い関係しか保たれておらず、
     * 実際には、interfaceでオプショナル演算子をつけても、
     * classの方で必須プロパティにするといったことができる。
     */
}

{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.age = 30;
        }
        Person.prototype.greet = function (phrase) {
            console.log(phrase + ' ' + this.name);
        };
        return Person;
    }());
    var person = new Person('Dan');
    person.greet('Good Morning');
}

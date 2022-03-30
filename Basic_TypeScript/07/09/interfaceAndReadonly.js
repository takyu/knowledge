var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        /**
         * interfaceで書かれていないpropertyやmethodを定義することが可能
         *
         * ただし、interfaceで書かれたpropertyやmethodは必ず実装する
         */
        this.age = 30;
    }
    Student.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Student;
}());
var student = new Student('Daniel', 'John');
console.log('student: ' + student.fullName());
var Student2 = /** @class */ (function () {
    function Student2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student2.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Student2;
}());
var student2 = new Student2('Tokyo', 'Taro');
console.log('student2: ' + student2.fullName());
// インタフェースのみだとアクセス可能
student2.firstName = 'Osaka';
console.log('student2: ' + student2.fullName());
var Student3 = /** @class */ (function () {
    function Student3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student3.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Student3;
}());
var student3 = new Student3('Daniel', 'Taro');
console.log('student3: ' + student3.fullName());
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var person = new Person('John');
person.greet('Hello,');
// person.name = 'Michael';
// person.greet('Hello, ');

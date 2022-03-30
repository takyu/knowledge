{
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return Person;
    }());
    var user = new Person('John', 'Doe');
    console.log('user1: ' + user.fullName());
    /**
     * オブジェクトのメソッドをオブジェクトからコピーした場合でも動作し、
     * 意図しない動作になってしまう。。
     */
    var userCopy = {
        fullName: user.fullName
    };
    // undefined undefined
    console.log('userCopy: ' + userCopy.fullName());
    /**
     * クラスメソッドがクラスからインスタンス化されることを保証するために、
     * クラスメソッドの引数に「this: [class name]」を付けると、
     * コンパイル時に警告を出してくれる。
     */
    var Person2 = /** @class */ (function () {
        function Person2(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person2.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return Person2;
    }());
    var user2 = new Person2('John', 'Doe');
    console.log('user2: ' + user.fullName());
    /**
     * オブジェクトのメソッドをオブジェクトからコピーした場合でも動作し、
     * 意図しない動作になってしまう。。
     */
    var user2Copy = {
        fullName: user2.fullName
    };
    // fullNameメソッドがPerson2クラスからインスタンス化されたものでは無いと警告
    // console.log('user2Copy: ' + user2Copy.fullName());
    // classと同じプロパティとメソッドを持たすと動作する
    var user2ReCopy = {
        firstName: 'aaa',
        lastName: 'bbb',
        fullName: user2.fullName
    };
    console.log('user2ReCopy: ' + user2ReCopy.fullName());
}

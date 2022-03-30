var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * access operator
 *
 * public, private, protected, readonly
 *
 * デフォルトでは, public修飾子に指定
 */
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
    // Personのプロパティは全てpublic修飾子
    user.firstName = 'Daniel';
    user.lastName = 'Maccatoni';
    console.log('user1: ' + user.fullName());
    /**
     * private
     *
     * プロパティやメソッドの変更を外部から受け付けない
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
    // エラー
    // user2.firstName = 'Daniel'
    user2.lastName = 'Maccatoni';
    console.log('user2: ' + user2.fullName());
    /**
     * protected
     *
     * 継承したクラスからのみアクセスすることができる
     */
    var Person3 = /** @class */ (function () {
        function Person3(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person3.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return Person3;
    }());
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User(firstName, lastName, isAdmin) {
            var _this = _super.call(this, firstName, lastName) || this;
            _this.isAdmin = isAdmin;
            return _this;
        }
        User.prototype.fullName = function () {
            return _super.prototype.fullName.call(this);
        };
        User.prototype.yourFirstName = function () {
            console.log('Person3(method): ' + this.firstName);
        };
        return User;
    }(Person3));
    var user3 = new User('John', 'Doe', false);
    console.log('user3: ' + user3.fullName());
    // protectedのため継承先のクラスから名前を参照することができる
    user3.yourFirstName();
    // エラー； protected修飾子のために継承先の外部からは変えることができない
    // user3.firstName = 'Michel'
    /**
     * readonly
     */
    var Person4 = /** @class */ (function () {
        function Person4(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person4.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return Person4;
    }());
    var user4 = new Person4('Michel', 'John');
    // readonlyのためエラー
    // user.setName('Jane')
    console.log('user4: ' + user4.fullName());
}

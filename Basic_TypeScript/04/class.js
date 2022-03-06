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
 * class
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
    var user = new Person("John", "Doe");
    console.log("user1: " + user.fullName());
    /**
     * access operator
     *
     * public, private, protected, readonly
     *
     * デフォルトでは, public修飾子に指定
     */
    // Personのプロパティは全てpublic修飾子
    user.firstName = "Daniel";
    user.lastName = "Maccatoni";
    console.log("user1: " + user.fullName());
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
    var user2 = new Person2("John", "Doe");
    // エラー
    // user2.firstName = 'Daniel'
    user2.lastName = "Maccatoni";
    console.log("user2: " + user2.fullName());
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
            console.log("Person3(method): " + this.firstName);
        };
        return User;
    }(Person3));
    var user3 = new User("John", "Doe", false);
    console.log("user3: " + user3.fullName());
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
    var user4 = new Person4("Michel", "John");
    // readonlyのためエラー
    // user.setName('Jane')
    console.log("user4: " + user4.fullName());
    /**
     * class shortened hand
     */
    var PersonShort = /** @class */ (function () {
        function PersonShort(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        PersonShort.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return PersonShort;
    }());
    var userShort = new PersonShort("John", "Michael");
    console.log("userShort: " + userShort.fullName());
    var Student = /** @class */ (function () {
        function Student(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Student.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return Student;
    }());
    var student = new Student("Daniel", "John");
    console.log("student: " + student.fullName());
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
    var student2 = new Student2("Tokyo", "Taro");
    console.log("student2: " + student2.fullName());
    // インタフェースのみだとアクセス可能
    student2.firstName = "Osaka";
    console.log("student2: " + student2.fullName());
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
    var student3 = new Student3("Daniel", "Taro");
    console.log("student3: " + student3.fullName());
    var Teacher = /** @class */ (function () {
        function Teacher(firstName, middleName, lastName) {
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
        }
        Teacher.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.middleName, " ").concat(this.lastName);
        };
        return Teacher;
    }());
    var teacher = new Teacher("John", "M", "Doe");
    console.log("teacher: " + teacher.fullName());
    var Teacher2 = /** @class */ (function () {
        function Teacher2(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Teacher2.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return Teacher2;
    }());
    var teacher2 = new Teacher2("John", "Doe");
    console.log("teacher2: " + teacher2.fullName());
    var Teacher3 = /** @class */ (function () {
        function Teacher3(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Teacher3.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return Teacher3;
    }());
    var teacher3 = new Teacher2("John", "Doe");
    console.log("teacher3: " + teacher2.fullName());
    var Foreign = /** @class */ (function () {
        function Foreign(firstName, middleName, lastName) {
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
        }
        Foreign.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.middleName, " ").concat(this.lastName);
        };
        return Foreign;
    }());
    var foreign = new Foreign("Daniel", "L", "John");
    console.log("foreign: " + foreign.fullName());
}

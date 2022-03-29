{
    var Person = /** @class */ (function () {
        /**
         * 全ての修飾子を含めきちんと明治的に宣言する
         * publicも同様に
         */
        function Person(id, firstName, lastName) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.fullName = function () {
            return "id(".concat(this.id, "): ").concat(this.firstName, " ").concat(this.lastName);
        };
        return Person;
    }());
    var user = new Person(1, 'John', 'Michael');
    console.log('user: ' + user.fullName());
}

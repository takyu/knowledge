{
    var Department_1 = /** @class */ (function () {
        /**
         * constructor関数はそもそもインスタンス化に使用されるものなので、
         * staticにはできない。
         */
        function Department(id, name) {
            this.id = id;
            this.name = name;
            /**
             * instance properties
             */
            this.employees = [];
            /**
             * instance関数などからstaticのプロパティやメソッドにアクセスしたい場合は、
             * プロパティ名を表記する
             */
            console.log(Department.fiscalYear);
            console.log(Department.createEmployee('Mike'));
        }
        /**
         * static methods
         */
        Department.createEmployee = function (name) {
            return {
                name: name,
            };
        };
        /**
         * instance methods
         */
        Department.prototype.describe = function () {
            console.log("Department: (".concat(this.id, "): ").concat(this.name));
        };
        Department.prototype.addEmployee = function (employee) {
            this.employees.push(employee);
        };
        Department.prototype.printEmployeeInformation = function () {
            console.log(this.employees);
            console.log('length of employees: ' + this.employees.length);
        };
        /**
         * static properties
         */
        Department.fiscalYear = 2022;
        return Department;
    }());
    var department = new Department_1(1, 'department1');
    console.log(Department_1.fiscalYear);
    console.log(Department_1.createEmployee('Michael'));
}

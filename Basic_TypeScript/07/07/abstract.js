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
{
    var Department = /** @class */ (function () {
        function Department(id, name) {
            this.id = id;
            this.name = name;
            this.employees = [];
        }
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
        return Department;
    }());
    var ITDepartment = /** @class */ (function (_super) {
        __extends(ITDepartment, _super);
        function ITDepartment(id, admins) {
            var _this = _super.call(this, id, 'IT') || this;
            _this.admins = admins;
            return _this;
        }
        // overload
        ITDepartment.prototype.addEmployee = function (name) {
            if (name === 'Sum')
                return;
            this.employees.push(name);
        };
        // override
        ITDepartment.prototype.describe = function () {
            console.log("IT department - ID: ".concat(this.id));
        };
        // 親クラスのabstractクラスで宣言されたメソッドを実装
        ITDepartment.prototype.introduce = function () {
            console.log("hello!! I'm ".concat(this.name, " department"));
        };
        return ITDepartment;
    }(Department));
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment(id, reports) {
            var _this = _super.call(this, id, 'Accounting') || this;
            _this.reports = reports;
            return _this;
        }
        AccountingDepartment.prototype.addReport = function (text) {
            this.reports.push(text);
        };
        AccountingDepartment.prototype.printReports = function () {
            console.log(this.reports);
            console.log('length of reports: ' + this.reports.length);
        };
        // overload
        AccountingDepartment.prototype.addEmployee = function (name) {
            if (name === 'Tom')
                return;
            this.employees.push(name);
        };
        // override
        AccountingDepartment.prototype.describe = function () {
            console.log("Accounting department - ID: ".concat(this.id));
        };
        // 親クラスのabstractクラスで宣言されたメソッドを実装
        AccountingDepartment.prototype.introduce = function () {
            console.log("hello!! I'm ".concat(this.name, " department"));
        };
        return AccountingDepartment;
    }(Department));
    var it = new ITDepartment(1, ['John']);
    var accounting = new AccountingDepartment(2, []);
    it.describe();
    accounting.describe();
    it.introduce();
    accounting.introduce();
}

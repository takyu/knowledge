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
    /**
     * 継承は一つのクラスからのみ行える
     *
     * 後述のインタフェースは複数継承ができる
     */
    // IT部門
    var ITDepartment = /** @class */ (function (_super) {
        __extends(ITDepartment, _super);
        function ITDepartment(id, admins) {
            var _this = 
            /**
             * 親クラスのコンストラクタ関数を呼び出す場合は、
             * 一番初めにsuperを呼び出す必要がある。
             */
            _super.call(this, id, 'IT') || this;
            _this.admins = admins;
            return _this;
        }
        // overload
        ITDepartment.prototype.addEmployee = function (name) {
            if (name === 'Sum')
                return;
            this.employees.push(name);
        };
        return ITDepartment;
    }(Department));
    var it = new ITDepartment(1, ['John']);
    it.addEmployee('John');
    it.addEmployee('Daniel');
    console.log(it);
    it.printEmployeeInformation();
    it.addEmployee('Tom');
    it.addEmployee('Sum');
    it.printEmployeeInformation(); // [ 'John', 'Daniel', 'Tom' ]
    // 会計部門
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
        };
        // overload
        AccountingDepartment.prototype.addEmployee = function (name) {
            if (name === 'Tom')
                return;
            this.employees.push(name);
        };
        return AccountingDepartment;
    }(Department));
    var accounting = new AccountingDepartment(2, []);
    accounting.addReport('receive');
    accounting.addReport('check');
    accounting.printReports();
    accounting.addEmployee('John');
    accounting.addEmployee('Daniel');
    accounting.addEmployee('Tom');
    accounting.addEmployee('Sum');
    accounting.printEmployeeInformation();
}

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
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment(id, reports) {
            var _this = _super.call(this, id, 'Accounting') || this;
            _this.reports = reports;
            _this.lastReport = reports[0];
            return _this;
        }
        AccountingDepartment.prototype.addReport = function (text) {
            this.reports.push(text);
            this.lastReport = text;
        };
        AccountingDepartment.prototype.printReports = function () {
            console.log(this.reports);
            console.log('length of reports: ' + this.reports.length);
        };
        AccountingDepartment.prototype.addEmployee = function (name) {
            if (name === 'Tom')
                return;
            this.employees.push(name);
        };
        Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
            /**
             * getter
             *
             * 外部からprivateの変数を取得する
             * カプセル化（データや処理を隠蔽すること）の概念
             */
            get: function () {
                if (this.lastReport) {
                    return this.lastReport;
                }
                throw new Error('do not find report.');
            },
            /**
             * setter
             *
             * 外部からprivateの変数を編集する
             * カプセル化（データや処理を隠蔽すること）の概念
             */
            set: function (value) {
                if (!value) {
                    throw new Error('write to correct value.');
                }
                this.addReport(value);
            },
            enumerable: false,
            configurable: true
        });
        return AccountingDepartment;
    }(Department));
    var accounting = new AccountingDepartment(2, []);
    /**
     * getterは通常のプロパティのアクセス表記で書く、実行を意味する()は書かない。
     *
     * setterは通常のプロパティの代入表記で書く、引数を意味する（）で書かない。
     */
    // この段階では何も入っていないので、例外処理でエラー
    // console.log(accounting.mostRecentReport);
    // 空文字は、例外処理でエラー
    // accounting.mostRecentReport = '';
    accounting.mostRecentReport = 'verify';
    console.log(accounting.mostRecentReport);
}

{
  class Department {
    protected employees: string[] = [];

    constructor(private readonly id: number, public name: string) {}

    describe(this: Department) {
      console.log(`Department: (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    printEmployeeInformation() {
      console.log(this.employees);
      console.log('length of employees: ' + this.employees.length);
    }
  }

  /**
   * 継承は一つのクラスからのみ行える
   *
   * 後述のインタフェースは複数継承ができる
   */

  // IT部門
  class ITDepartment extends Department {
    private admins: string[];

    constructor(id: number, admins: string[]) {
      /**
       * 親クラスのコンストラクタ関数を呼び出す場合は、
       * 一番初めにsuperを呼び出す必要がある。
       */
      super(id, 'IT');
      this.admins = admins;
    }

    // overload
    addEmployee(name: string) {
      if (name === 'Sum') return;

      this.employees.push(name);
    }
  }

  const it = new ITDepartment(1, ['John']);

  it.addEmployee('John');
  it.addEmployee('Daniel');

  console.log(it);

  it.printEmployeeInformation();

  it.addEmployee('Tom');
  it.addEmployee('Sum');
  it.printEmployeeInformation(); // [ 'John', 'Daniel', 'Tom' ]

  // 会計部門
  class AccountingDepartment extends Department {
    constructor(id: number, private reports: string[]) {
      super(id, 'Accounting');
    }

    addReport(text: string) {
      this.reports.push(text);
    }

    printReports() {
      console.log(this.reports);
      console.log('length of reports: ' + this.reports.length);
    }

    // overload
    addEmployee(name: string) {
      if (name === 'Tom') return;

      this.employees.push(name);
    }
  }

  const accounting = new AccountingDepartment(2, []);

  accounting.addReport('receive');
  accounting.addReport('check');

  accounting.printReports();

  accounting.addEmployee('John');
  accounting.addEmployee('Daniel');

  accounting.addEmployee('Tom');
  accounting.addEmployee('Sum');

  accounting.printEmployeeInformation();
}

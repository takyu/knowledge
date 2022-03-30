{
  abstract class Department {
    protected employees: string[] = [];

    constructor(protected readonly id: number, public name: string) {}

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

    /**
     * abstract
     *
     * 実装の型のみを指定することができる
     */
    abstract introduce(this: Department): void;
  }

  class ITDepartment extends Department {
    private admins: string[];

    constructor(id: number, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }

    // overload
    addEmployee(name: string) {
      if (name === 'Sum') return;

      this.employees.push(name);
    }

    // override
    describe(): void {
      console.log(`IT department - ID: ${this.id}`);
    }

    // 親クラスのabstractクラスで宣言されたメソッドを実装
    introduce(): void {
      console.log(`hello!! I'm ${this.name} department`);
    }
  }

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

    // override
    describe(): void {
      console.log(`Accounting department - ID: ${this.id}`);
    }

    // 親クラスのabstractクラスで宣言されたメソッドを実装
    introduce(): void {
      console.log(`hello!! I'm ${this.name} department`);
    }
  }

  const it = new ITDepartment(1, ['John']);
  const accounting = new AccountingDepartment(2, []);

  it.describe();
  accounting.describe();

  it.introduce();
  accounting.introduce();

  // abstractクラス自身をインスタンス化する事はできない
  // const department = new Department;
}

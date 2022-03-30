/**
 * シングルトンパターン
 *
 * そのオブジェクトが一つしかないことを保証する
 *
 * ここでは、department部門が一つしかないことを保証する書き方を示す。
 * typescriptでは、privateコンストラクタを用いて実装する
 */
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

    abstract introduce(this: Department): void;
  }

  class ITDepartment extends Department {
    private admins: string[];

    constructor(id: number, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }

    addEmployee(name: string) {
      if (name === 'Sum') return;

      this.employees.push(name);
    }

    describe(): void {
      console.log(`IT department - ID: ${this.id}`);
    }

    introduce(): void {
      console.log(`hello!! I'm ${this.name} department`);
    }
  }

  class AccountingDepartment extends Department {
    /**
     * 自身のクラスの型を持ったインスタンス
     */
    private static instance: AccountingDepartment;

    private constructor(id: number, private reports: string[]) {
      super(id, 'Accounting');
    }

    static getInstance() {
      /**
       * staticメソッドでthisを使うと、class自身を指す
       */
      if (this.instance /* AccountingDepartment.instance でも可 */) {
        return this.instance; // AccountingDepartment.instance
      }
      return (this.instance = new AccountingDepartment(2, []));
    }

    addReport(text: string) {
      this.reports.push(text);
    }

    printReports() {
      console.log(this.reports);
      console.log('length of reports: ' + this.reports.length);
    }

    addEmployee(name: string) {
      if (name === 'Tom') return;

      this.employees.push(name);
    }

    describe(): void {
      console.log(`Accounting department - ID: ${this.id}`);
    }

    introduce(): void {
      console.log(`hello!! I'm ${this.name} department`);
    }
  }

  const it = new ITDepartment(1, ['John']);
  const it2 = new ITDepartment(1, ['John']);

  console.log(it === it2); // false

  const accounting = AccountingDepartment.getInstance();
  const accounting2 = AccountingDepartment.getInstance();

  console.log(accounting === accounting2); // true
}

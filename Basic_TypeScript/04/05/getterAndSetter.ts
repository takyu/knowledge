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

  class AccountingDepartment extends Department {
    private lastReport: string;

    constructor(id: number, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }

    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }

    printReports() {
      console.log(this.reports);
      console.log('length of reports: ' + this.reports.length);
    }

    addEmployee(name: string) {
      if (name === 'Tom') return;

      this.employees.push(name);
    }

    /**
     * getter
     *
     * 外部からprivateの変数を取得する
     * カプセル化（データや処理を隠蔽すること）の概念
     */
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('do not find report.');
    }

    /**
     * setter
     *
     * 外部からprivateの変数を編集する
     * カプセル化（データや処理を隠蔽すること）の概念
     */
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('write to correct value.');
      }
      this.addReport(value)
    }
  }

  const accounting = new AccountingDepartment(2, []);

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

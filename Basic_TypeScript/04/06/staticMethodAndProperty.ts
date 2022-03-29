{
  class Department {
    /**
     * static properties
     */
    static fiscalYear = 2022;

    /**
     * instance properties
     */
    protected employees: string[] = [];

    /**
     * constructor関数はそもそもインスタンス化に使用されるものなので、
     * staticにはできない。
     */
    constructor(private readonly id: number, public name: string) {
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
    static createEmployee(name: string) {
      return {
        name: name,
      };
    }

    /**
     * instance methods
     */
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

  const department = new Department(1, 'department1');

  console.log(Department.fiscalYear);
  console.log(Department.createEmployee('Michael'));
}

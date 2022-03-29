{
  class Person {
    /**
     * 全ての修飾子を含めきちんと明治的に宣言する
     * publicも同様に
     */
    constructor(
      private readonly id: number,
      private firstName: string,
      public lastName: string
    ) {}

    fullName(): string {
      return `id(${this.id}): ${this.firstName} ${this.lastName}`;
    }
  }

  const user = new Person(1, 'John', 'Michael');

  console.log('user: ' + user.fullName());
}

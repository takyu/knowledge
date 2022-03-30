/**
 * Union（合併）
 *
 * いずれか（片方のタイプのプロパティは網羅すること）
 *
 * 共通にもつプロパティは必ず設定しないといけないが、それ以外は必須ではない
 */
{
  type PersonFirst = {
    firstName: string;
    age: number;
    height: number;
  };

  type PersonLast = {
    lastName: string;
    age: number;
    weight: number;
  };

  type Person = PersonFirst | PersonLast;

  const user: Person = {
    firstName: 'Taro',
    lastName: 'Tokyo',

    // これは必ずいる
    age: 30,

    weight: 60,
  };

  console.log('user:');
  console.log(user);
}

/**
 * Intersection（交差）
 *
 * どちらも（両方のプロパティを必ず含める）
 */
{
  type PersonFirst = {
    firstName: string;
    age: number;
    height: number;
  };

  type PersonLast = {
    lastName: string;
    age: number;
    weight: number;
  };

  type Person = PersonFirst & PersonLast;

  const user: Person = {
    firstName: 'Taro',
    lastName: 'Tokyo',

    age: 30,

    height: 170,
    weight: 60,
  };

  console.log('user:');
  console.log(user);
}

/**
 * intersectionでは、type aliasとinterfaceを別のtype alias
 * として利用できる
 */
{
  type PersonFirst = {
    firstName: string;
    age: number;
    height: number;
  };

  interface PersonLast {
    lastName: string;
    age: number;
    weight: number;
  }

  type Person = PersonFirst & PersonLast;

  const user: Person = {
    firstName: 'Jiro',
    lastName: 'Tokyo',

    age: 20,

    height: 180,
    weight: 79,
  };

  console.log('user:');
  console.log(user);
}

/**
 * 色々な型で利用可能
 */
{
  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  /**
   * オブジェクト型で使用した場合、オブジェクトのプロパティが結合されたもの
   */
  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: 'John',
    privileges: ['create-server'],
    startDate: new Date(),
  };

  /**
   * primitive typeでも可能
   *
   * この場合は、union型で交差している場所、つまり Universal は number型に
   */
  type Combinable = string | number;
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric; // number type
}

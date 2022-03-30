/**
 * Keyof operator
 */
{
  /**
   * 型エイリアス、interfaceで設定したプロパティ名をUnion型として取得できる
   */
  type Person = {
    name: string;
    age: number;
    hobby: string[];
  };

  type User = keyof Person;

  const name: User = 'name';
  const age: User = 'age';
  const hobby: User = 'hobby';

  // エラー
  // const user3: User = 'email'

  console.log(name);
  console.log(age);
  console.log(hobby);

  /**
   * よって、プロパティ名を取得することができるので、
   * オブジェクトに指定するプロパティ名が存在することを、
   * typescript に示してあげることができる
   */
  function extractAndConvert<
    T extends object,
    U extends keyof T /* U (オブジェクト)に T (プロパティ)があることを保証 */
  >(obj: T, prop: U) {
    return 'value: ' + obj[prop];
  }

  // 第一引数のオブジェクトに、name プロパティが無いためにエラー
  // extractAndConvert({}, 'name')

  console.log(extractAndConvert({ name: 'Dan' }, 'name'));
}

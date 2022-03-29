/**
 * Object type
 *
 * プロパティに対して型を設定できる
 */
{
  const user: {
    id: number;
    name: string;
  } = {
    id: 100,
    name: "Taro",
  };
  console.log(user);

  // 型の横にセミコロンが必須なのは1行で書く場合
  const user2: { id: number; name: string } = {
    id: 200,
    name: "jiro",
  };
  console.log(user2);

  /**
   * Optional properties
   *
   * [val]?: type
   *
   * 省略可能になる
   */
  const user3: {
    id: number;
    name?: string;
  } = {
    id: 300,
  };
  console.log(user3);


  /**
   * Readonly properties
   *
   * readonly [val]: type
   *
   * 読み取り専用
   */
  const user4: {
    id: number;
    readonly name: string;
  } = {
    id: 400,
    name: "Sabrou",
  };
  console.log(user4)

  // Error
  // user4.name = 'Shiro'
}

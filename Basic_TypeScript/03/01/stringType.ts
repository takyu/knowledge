/**
 * String type
 */
{
  const personName: string = "John";
  console.log(personName);

  // エラー
  // const personName2: string = 25;
  // console.log(personName2);

  // 文字列の片方は違うかたでも動く
  const personName3: string = "Dan" + 25;
  console.log(personName3);
}

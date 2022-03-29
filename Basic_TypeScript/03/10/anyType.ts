/**
 * Any type
 *
 * どんな型でも入れられる
 *
 * 一時的に型をanyに設定して後ほど型が確定して後に正しい型に直すといった利用方法
 */
{
  const name: any = undefined;
  const name2: any = 10;
  const name3: any = null;
  const name4: any = ["apple", "banana"];
  const name5: any = "Daniel";

  console.log(name);
  console.log(typeof(name));
  console.log(name2);
  console.log(typeof(name2));
  console.log(name3);
  console.log(typeof(name3));
  console.log(name4);
  console.log(typeof(name4));
  console.log(name5);
  console.log(typeof(name5));
}

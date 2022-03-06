/**
 * Null type
 */
{
  const value = null;
  console.log(value);

  // ユニオン型で利用
  let name: string | null = null;
  console.log(name);

  let name2: string | null = 'Peter'
  console.log(name2);

}
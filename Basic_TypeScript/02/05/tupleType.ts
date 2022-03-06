/**
 * Tuple type
 *
 * 配列の要素が固定されている（固定長）
 */
{
  const fruits: [string, number] = [
    'apple',
    10
  ]
  console.log(fruits);

  // 逆に入れてしまうとエラー
  // const fruits2: [string, number] = [
  //   10,
  //   'apple'
  // ]

  // 要素の順番がわからない時や要素数が不確定な時は配列型を使う
  const fruits2: (string | number)[] = [
    'orange', 20
  ]
  console.log(fruits2);

  const fruits3: Array<(number | string)> = [
    'grape', 10, 'banana'
  ]
  console.log(fruits3);

}
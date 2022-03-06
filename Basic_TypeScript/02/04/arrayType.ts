/**
 * Array type
 */
{
  const fruits: string[] = [
    'apple',
    'banana'
  ]
  console.log(fruits);

  const fruits2: Array<string> = [
    'orange',
    'grape'
  ]
  console.log(fruits2);

  // 決まった型しか入らない
  // const fruits3: Array<string> = [
  //   'apple',
  //   10
  // ]

  // 複数の方を入れたい場合、union型を使う
  const food: (string | number)[] = [
    'apple pie', 10
  ]
  console.log(food);


  const food2: Array<(string | number)> = [
    'cinnamon pie', 20
  ]
  console.log(food2);
}

/**
 * Restrict Generics
 *
 * <T extends types>
 *
 * どの型を引数に受け取って良いのか制約をかける
 * プリミティブ型、オブジェクト型、独自の型などどの型でも指定できる
 */

{
  function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergeObj = merge({ name: 'Mike', hobby: ['tennis'] }, 40);

  /**
   * 暗黙的に処理されているだけで、実際には第二引数に object を渡していないために
   * merge は行われていない
   */
  console.log(mergeObj);

  /**
   * ゆえに、引数にオブジェクトを渡すように制限をかける
   */
  function mergeRestrict<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  // 第二引数に object を渡していないためにエラー
  // const mergeObj2 = mergeRestrict({ name: 'Mike', hobby: ['tennis'] }, 40);

  const mergeObj3 = mergeRestrict(
    { name: 'Mike', hobby: ['tennis'] },
    { age: 49 }
  );

  console.log(mergeObj3);

  /**
   * Union 型で複数制約をかけることも可能
   */
  const exFunction = <T extends string | number>(args: T) => args;

  const result = exFunction<string>('Taro');
  const result2 = exFunction<number>(300);

  console.log(result);
  console.log(result2);
}

/**
 * 引数は任意の型を受け入れることができるが、
 * 必ず length プロパティを所持していなければならないことを保証したい
 *
 * → <T extends { length: number }>(parameter_name: T)
 *
 * と書くことができる。
 */
{
  interface Lengthy {
    length: number;
  }

  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'nothing value.';
    if (element.length > 0) {
      descriptionText = `number of value is ${element.length}.`;
    }
    return [element, descriptionText];
  }

  /**
   * string や array 型はlength プロパティを持っているが、
   * number 型などは持っていない
   */
  console.log(countAndDescribe('hello!'));
  console.log(countAndDescribe(['soccer', 'tennis']));
  console.log(countAndDescribe([]));

  // エラー
  // console.log(countAndDescribe(10));

}

/**
 * Class Generics
 */
{
  /**
   * data の中身の型を自在に変えれるように Generics を適用
   */
  class DataStorage<
    T extends string | number | boolean /* プリミティブ型に制限 */
  > {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      /**
       * indexOf メソッドは見つからない場合、-1 を返すので、一番後ろを意味するために
       * 見つからなければ処理しない条件を付け加える
       */
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
      return [...this.data];
    }
  }

  // string 型のデータを格納するストレージ
  const textStorage = new DataStorage<string>();

  textStorage.addItem('data1');
  textStorage.addItem('data2');
  textStorage.addItem('data3');

  textStorage.removeItem('data1');

  console.log(textStorage.getItems());

  // number 型のデータを格納するストレージ
  const numberStorage = new DataStorage<number>();

  numberStorage.addItem(10);
  numberStorage.addItem(20);
  numberStorage.addItem(30);

  numberStorage.removeItem(20);

  console.log(numberStorage.getItems());

  /**
   * object 型のデータを格納するストレージはプリミティブ型のストレージ
   * と一緒に扱わない方が良い。
   * → object 型はリファレンス型なので、条件分岐がややこしくなるため
   */
  // const objectStorage = new DataStorage<object>();

  // // 参照を変数に渡してから処理していかないといけない
  // const obj = { name: 'Mike' };

  // objectStorage.addItem(obj);
  // objectStorage.removeItem(obj);
  // // ...
}

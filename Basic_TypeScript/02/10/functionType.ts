/**
 * Function type
 */
{
  const hello: (name: string) => string = (name: string): string => {
    return 'hello ' + name;
  };
  console.log(hello('Taro'));

  const goodMorning: (name: string) => void = (name: string): void => {
    console.log(`hello ${name}`);
  };
  goodMorning('Jiro');

  // 関数オブジェクトの変数
  let greet: Function;

  greet = hello;

  console.log(greet('sabro'));

  greet = goodMorning;

  greet('yorou');

  /**
   * callbackを組み合わせる
   */

  function addAndHandle(
    n1: number,
    n2: number,
    cb: (num: number) => void
  ): void {
    const res = n1 + n2;
    cb(res);
  }

  addAndHandle(5, 10, (val) => {
    console.log(
      '🚀 ~ file: functionType.ts ~ line 40 ~ addAndHandle ~ val',
      val
    );

    /**
     * 受け取り側の引数の型が戻り値を期待していないとしても、
     * コールバック関数は戻り値を返すことができます。
     */
    return val;
  });
}

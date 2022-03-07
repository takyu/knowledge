/**
 * Generics
 */
{
  function fun1(args: number): number {
    return args;
  }
  console.log("fun1: " + fun1(1));
  console.log(typeof fun1(1));

  function fun2(args: string): string {
    return args;
  }
  console.log("fun2: " + fun2("1"));
  console.log(typeof fun2("1"));

  /**
   * 同じような処理をする関数でタイプだけが違う...
   * -> Any型を使うことはできるが、返り値の型が保証できない...
   * -> Genericsの登場
   */
  function fun<T>(args: T): T {
    return args;
  }
  const res = fun<string>("Hello Generics World!!");
  const res2 = fun<number>(200);

  console.log("res: " + res);
  console.log("res2: " + res2);

  /**
   * ジェネリクスと型推論により省略記法も可能
   */
  const res3 = fun("Hello Generics World!!");
  const res4 = fun(200);
  console.log("res3: " + res3);
  console.log("res4: " + res4);

  /**
   * オブジェクトも引数にとれる
   */
  const res5 = fun<{ name: string }>({ name: "Taro" });

  console.log("res5:");
  console.log(res5);

  /**
   * オブジェクト型の場合はinterfaceやtype aliasで書き換え可能
   */
  interface IUser {
    name: string;
  }

  type TUser = {
    name: string;
  };

  const res6 = fun<IUser>({ name: "John" });
  const res7 = fun<TUser>({ name: "Dan" });

  console.log("res6");
  console.log(res6);
  console.log("res7");
  console.log(res7);

  /**
   * アロー関数表記
   */
  const funArrow = <T>(args: T): T => args;

  const resArrow = funArrow<string>("Hello Generics World!!");
  const resArrow2 = funArrow<number>(200);
  const resArrow3 = funArrow("Hello Generics World!!");
  const resArrow4 = funArrow(200);
  const resArrow5 = funArrow<{ name: string }>({ name: "Taro" });

  console.log("resArrow: " + resArrow);
  console.log("resArrow2: " + resArrow2);
  console.log("resArrow3: " + resArrow3);
  console.log("resArrow4: " + resArrow4);
  console.log("resArrow5:");
  console.log(resArrow5);

  /**
   * 複数の型を指定
   */
  function funs<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
  }

  const resFuns = funs("Hello", 200);

  console.log("resFuns:");
  console.log(resFuns);
  console.log(typeof resFuns);

  /**
   * Tを指定できる型に制限を加える
   */
  const exFun = <T extends string | number>(args: T): T => args;

  const res8 = exFun<string>("Taro");
  const res9 = exFun<number>(300);

  // エラー
  // const res10 = exFun<Object>({name: 'Jiro'})

  console.log("res8: " + res8);
  console.log("res9: " + res9);

  /**
   * Interfaceでジェネリクス
   */
  interface IKeyPair<T, U> {
    key: T;
    value: U;
  }

  const kv1: IKeyPair<number, string> = {
    key: 1,
    value: 'Steve'
  }
  const kv2: IKeyPair<number, number> = {
    key: 100,
    value: 200
  }
  const kv3: IKeyPair<string, string> = {
    key: 'Foo',
    value: 'hoge'
  }
  const kv4: IKeyPair<string, string[]> = {
    key: 'John',
    value: [
      'Dan',
      'Jane'
    ]
  }

  console.log('kv1');
  console.log(kv1);
  console.log('kv2');
  console.log(kv2);
  console.log('kv3');
  console.log(kv3);
  console.log('kv4');
  console.log(kv4);

  /**
   * type aliasでジェネリクス
   */
  type TKeyPair<T, U> = {
    key: T,
    value: U
  }

  const kv5: TKeyPair<number, string> = {
    key: 1,
    value: 'Steve'
  }
  const kv6: TKeyPair<number, number> = {
    key: 100,
    value: 200
  }
  const kv7: TKeyPair<string, string> = {
    key: 'Foo',
    value: 'hoge'
  }
  const kv8: TKeyPair<string, string[]> = {
    key: 'John',
    value: [
      'Dan',
      'Jane'
    ]
  }

  console.log('kv5');
  console.log(kv5);
  console.log('kv6');
  console.log(kv6);
  console.log('kv7');
  console.log(kv7);
  console.log('kv8');
  console.log(kv8);

}

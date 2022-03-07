/**
 * Generics
 */
{
    function fun1(args) {
        return args;
    }
    console.log("fun1: " + fun1(1));
    console.log(typeof fun1(1));
    function fun2(args) {
        return args;
    }
    console.log("fun2: " + fun2("1"));
    console.log(typeof fun2("1"));
    /**
     * 同じような処理をする関数でタイプだけが違う...
     * -> Any型を使うことはできるが、返り値の型が保証できない...
     * -> Genericsの登場
     */
    function fun(args) {
        return args;
    }
    var res = fun("Hello Generics World!!");
    var res2 = fun(200);
    console.log("res: " + res);
    console.log("res2: " + res2);
    /**
     * ジェネリクスと型推論により省略記法も可能
     */
    var res3 = fun("Hello Generics World!!");
    var res4 = fun(200);
    console.log("res3: " + res3);
    console.log("res4: " + res4);
    /**
     * オブジェクトも引数にとれる
     */
    var res5 = fun({ name: "Taro" });
    console.log("res5:");
    console.log(res5);
    var res6 = fun({ name: "John" });
    var res7 = fun({ name: "Dan" });
    console.log("res6");
    console.log(res6);
    console.log("res7");
    console.log(res7);
    /**
     * アロー関数表記
     */
    var funArrow = function (args) { return args; };
    var resArrow = funArrow("Hello Generics World!!");
    var resArrow2 = funArrow(200);
    var resArrow3 = funArrow("Hello Generics World!!");
    var resArrow4 = funArrow(200);
    var resArrow5 = funArrow({ name: "Taro" });
    console.log("resArrow: " + resArrow);
    console.log("resArrow2: " + resArrow2);
    console.log("resArrow3: " + resArrow3);
    console.log("resArrow4: " + resArrow4);
    console.log("resArrow5:");
    console.log(resArrow5);
    /**
     * 複数の型を指定
     */
    function funs(arg1, arg2) {
        return [arg1, arg2];
    }
    var resFuns = funs("Hello", 200);
    console.log("resFuns:");
    console.log(resFuns);
    console.log(typeof resFuns);
    /**
     * Tを指定できる型に制限を加える
     */
    var exFun = function (args) { return args; };
    var res8 = exFun("Taro");
    var res9 = exFun(300);
    // エラー
    // const res10 = exFun<Object>({name: 'Jiro'})
    console.log("res8: " + res8);
    console.log("res9: " + res9);
    var kv1 = {
        key: 1,
        value: 'Steve'
    };
    var kv2 = {
        key: 100,
        value: 200
    };
    var kv3 = {
        key: 'Foo',
        value: 'hoge'
    };
    var kv4 = {
        key: 'John',
        value: [
            'Dan',
            'Jane'
        ]
    };
    console.log('kv1');
    console.log(kv1);
    console.log('kv2');
    console.log(kv2);
    console.log('kv3');
    console.log(kv3);
    console.log('kv4');
    console.log(kv4);
    var kv5 = {
        key: 1,
        value: 'Steve'
    };
    var kv6 = {
        key: 100,
        value: 200
    };
    var kv7 = {
        key: 'Foo',
        value: 'hoge'
    };
    var kv8 = {
        key: 'John',
        value: [
            'Dan',
            'Jane'
        ]
    };
    console.log('kv5');
    console.log(kv5);
    console.log('kv6');
    console.log(kv6);
    console.log('kv7');
    console.log(kv7);
    console.log('kv8');
    console.log(kv8);
}

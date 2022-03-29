/**
 * Function type
 */
{
    var hello = function (name) {
        return 'hello ' + name;
    };
    console.log(hello('Taro'));
    var goodMorning = function (name) {
        console.log("hello ".concat(name));
    };
    goodMorning('Jiro');
    // 関数オブジェクトの変数
    var greet = void 0;
    greet = hello;
    console.log(greet('sabro'));
    greet = goodMorning;
    greet('yorou');
    /**
     * callbackを組み合わせる
     */
    function addAndHandle(n1, n2, cb) {
        var res = n1 + n2;
        cb(res);
    }
    addAndHandle(5, 10, function (val) {
        console.log("🚀 ~ file: functionType.ts ~ line 40 ~ addAndHandle ~ val", val);
    });
}

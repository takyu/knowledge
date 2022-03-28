/**
 * Number type
 */
{
    var personAge = 25;
    console.log(personAge);
    var tmp = -10.5;
    console.log(tmp);
    function add(n1, n2, showResult, phrase) {
        var res = n1 + n2;
        if (showResult) {
            // 一番初めにstring型が入ってきているためにstringとして出力される
            // console.log(phrase + n1 + n2);
            // 一番初めに演算をしておく（引数の型で保証されているので大丈夫）
            console.log(phrase + res);
        }
        else {
            return n1 + n2;
        }
    }
    var num1 = 4;
    var num2 = 4.5;
    var printResult = true;
    var printPhrase = 'result: ';
    add(num1, num2, printResult, printPhrase);
}

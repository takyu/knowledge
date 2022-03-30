/**
 * Type Casting
 */
{
    /**
     * document はブラウザ環境のみで使えるために、node などのサーバーサイドでは認識されない
     * → windowの状態をチェックしてコンパイルエラーを回避
     */
    if (typeof window === 'object') {
        // 型推論によって、HTMLParagraphElement が型に設定
        var paragraph = document.querySelector('p');
        // 型推論によって、より広義の HTMLElement が型に設定
        var outputParagraph = document.getElementById('message-output');
        // 型推論によって、より広義の Element が型に設定
        var userInputElement = document.querySelector('#user-input');
        // HTMLinputElement と認識していないために、value属性がないと言われてしまう。
        // userInputElement.value = 'Hello';
        /**
         * type castingで明治的に示してあげる
         */
        /**
         * 1. JSX表記
         *
         * Reactなどのフレームワークと被るためにあまり使われない
         * なお、最後のエクスクラメーションマークは、そのHTMLElementが null でないことを示す。
         */
        var userInputElement1 = (document.querySelector('#user-input'));
        userInputElement1.value = 'Hello';
        /**
         * 2.Type Assertion の活用
         *
         * 明示的に型を設定することで推論した型の情報を上書きする
         */
        var userInputElement2 = document.querySelector('#user-input');
        userInputElement1.value = 'Hello';
    }
    /**
     * 変数に対しても使うことができ、ユニオン型のタイプを一つに決定することができる
     */
    var getValue = function (format) { return (format ? '10' : 10); };
    // string | numberのユニオンの型推論をするのでstringに対するメソッドは使えない
    // const value = getValue(true);
    // console.log(value.length);
    // stringであると明示的にする
    var value = getValue(true);
    console.log('value length: ' + value.length);
    // もう一つの記述方法
    var value2 = getValue(true);
    console.log('value2 length: ' + value.length);
}

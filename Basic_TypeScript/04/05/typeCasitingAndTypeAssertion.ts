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
    const paragraph = document.querySelector('p');

    // 型推論によって、より広義の HTMLElement が型に設定
    const outputParagraph = document.getElementById('message-output');

    // 型推論によって、より広義の Element が型に設定
    const userInputElement = document.querySelector('#user-input');

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
    const userInputElement1 = <HTMLInputElement>(
      document.querySelector('#user-input1')!
    );

    userInputElement1.value = 'Hello';

    /**
     * 2.Type Assertion の活用
     *
     * 明示的に型を設定することで推論した型の情報を上書きする
     */
    const userInputElement2 = document.querySelector(
      '#user-input2'
    )! as HTMLInputElement;

    userInputElement1.value = 'Hello';

    // そのDOMが null でないことを示すために、if文で条件分岐させる場合もあり
    const userInputElement3 = document.querySelector('#user-input3');

    if (userInputElement3) {
      // 変数に対して型アサーションを使用するために () を用いる
      (userInputElement3 as HTMLInputElement).value = 'Hello';
    }
  }

  /**
   * 変数に対しても使うことができ、ユニオン型のタイプを一つに決定することができる
   */
  const getValue: (format: boolean) => string | number = (
    format: boolean
  ): string | number => (format ? '10' : 10);

  // string | numberのユニオンの型推論をするのでstringに対するメソッドは使えない
  // const value = getValue(true);
  // console.log(value.length);

  // stringであると明示的にする
  const value = getValue(true) as string;
  console.log('value length: ' + value.length);

  // もう一つの記述方法
  const value2 = <string>getValue(true);
  console.log('value2 length: ' + value.length);
}

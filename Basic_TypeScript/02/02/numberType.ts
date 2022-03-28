/**
 * Number type
 */
{
  const personAge: number = 25;
  console.log(personAge);

  const tmp: number = -10.5;
  console.log(tmp);

  function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    const res = n1 + n2;

    if (showResult) {

      // 一番初めにstring型が入ってきているためにstringとして出力される
      // console.log(phrase + n1 + n2);

      // 一番初めに演算をしておく（引数の型で保証されているので大丈夫）
      console.log(phrase + res);

    } else {
      return n1 + n2;
    }
  }

  const num1 = 4;
  const num2 = 4.5;
  const printResult = true;
  const printPhrase = 'result: '

  add(num1, num2, printResult, printPhrase);
}

/**
 * Type Assertion
 *
 * 明示的に型を設定することで推論した型の情報を上書きする
 */
{
  const getValue: (format: boolean) => string | number = (
    format: boolean
  ): string | number => (format ? "10" : 10);

  // string | numberのユニオンの型推論をするのでstringに対するメソッドは使えない
  // const value = getValue(true);
  // console.log(value.length);

  // stringであると明示的にする -> タイプアサーション
  const value = getValue(true) as string;
  console.log("value length: " + value.length);

  // もう一つの記述方法
  const value2 = <string>getValue(true);
  console.log("value2 length: " + value.length);
}

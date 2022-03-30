/**
 * Function Overload
 *
 * 一つの関数に対して、複数の関数のシグネチャを定義する
 */
{
  type Combinable = string | number;
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric;

  /**
   * function function_name(parameter: type): return type;
   *
   * 戻り値の型を指定したい関数の上に書く。
   */
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;

  /**
   * function add(a: number, b: number): number (+3 overloads)
   *
   * function overloadをつけない場合は、戻り値の型は Combinableとなる
   */
  function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  const result = add(4, 8); // return type: number
  const result2 = add('hello, ', 'Mike'); // return type: string
  const result3 = add('hello, ', 2); // return type: string
  const result4 = add(3, 'aaaa'); // return type: string
}

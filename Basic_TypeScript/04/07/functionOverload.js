/**
 * Function Overload
 *
 * 一つの関数に対して、複数の関数のシグネチャを定義する
 */
{
    /**
     * function add(a: number, b: number): number (+3 overloads)
     *
     * function overloadをつけない場合は、戻り値の型は Combinableとなる
     */
    function add(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    var result = add(4, 8); // return type: number
    var result2 = add('hello, ', 'Mike'); // return type: string
    var result3 = add('hello, ', 2); // return type: string
    var result4 = add(3, 'aaaa'); // return type: string
}

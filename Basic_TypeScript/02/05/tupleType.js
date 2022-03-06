/**
 * Tuple type
 *
 * 配列の要素が固定されている（固定長）
 */
{
    var fruits = [
        'apple',
        10
    ];
    console.log(fruits);
    // 逆に入れてしまうとエラー
    // const fruits2: [string, number] = [
    //   10,
    //   'apple'
    // ]
    // 要素の順番がわからない時や要素数が不確定な時は配列型を使う
    var fruits2 = [
        'orange', 20
    ];
    console.log(fruits2);
    var fruits3 = [
        'grape', 10, 'banana'
    ];
    console.log(fruits3);
}

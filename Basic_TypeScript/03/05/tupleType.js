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
    // オブジェクトの中で明示的に指名
    var person = {
        name: 'John',
        age: 10,
        hobbies: [
            'soccer',
            'tennis'
        ],
        role: [
            2, 'author'
        ]
    };
    /**
     * 三つめの要素を追加することや、指定された型に無いものを代入することは不可
     *
     * しかし、pushは許容するので注意
     */
    // person.role = [0, 'user', 'admin']
    // person.role.push(true);
    // person.role[1] = 10;
    console.log("🚀 ~ file: tupleType.ts ~ line 57 ~ person", person);
    // 許容
    person.role.push('admin');
    console.log("🚀 ~ file: tupleType.ts ~ line 57 ~ person", person);
}

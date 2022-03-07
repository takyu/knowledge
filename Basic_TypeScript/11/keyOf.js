/**
 * Keyof operator
 *
 * 型エイリアス、interfaceで設定したプロパティ名をUnion型として取得できる
 */
{
    var user = 'name';
    var user2 = 'age';
    // エラー
    // const user3: User = 'email'
    console.log(user);
    console.log(user2);
}

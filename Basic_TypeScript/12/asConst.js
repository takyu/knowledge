/**
 * as const
 *
 * オブジェクトにas constを設定すると全てのプロパティがreadonlyになる
 */
{
    var user = {
        firstName: 'John',
        lastName: 'Doe',
        address: {
            prefecture: 'Tokyo'
        }
    };
    // エラー
    // user.address.prefecture = 'Osaka'
    var fruits = ["apple", "banana", "lemon"];
    fruits.push("meron");
    console.log('fruits:');
    console.log(fruits);
}

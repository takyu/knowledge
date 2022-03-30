/**
 * as const
 *
 * オブジェクトにas constを設定すると全てのプロパティがreadonlyになる
 */
{
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      prefecture: 'Tokyo',
    },
  } as const;

  // エラー
  // user.address.prefecture = 'Osaka'

  const fruits = ['apple', 'banana', 'lemon'];

  fruits.push('meron');

  console.log('fruits:');
  console.log(fruits);

  const fruits2 = ['apple', 'banana', 'lemon'] as const;

  // エラー
  // fruits2.push('meron')
}

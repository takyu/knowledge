/**
 * Keyof operator
 *
 * 型エイリアス、interfaceで設定したプロパティ名をUnion型として取得できる
 */
{
  type Person = {
    name: string;
    age: number;
  }

  type User = keyof Person;

  const user: User = 'name';
  const user2: User = 'age';

  // エラー
  // const user3: User = 'email'

  console.log(user);
  console.log(user2);
  
}

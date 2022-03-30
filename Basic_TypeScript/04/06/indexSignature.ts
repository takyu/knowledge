/**
 * Index Signature
 *
 * [prop: string(or number)]: Type;
 *
 * propの部分は任意の名前でよく、property に対する型を設定します（string か number 型のみ）
 * Typeの部分はそのプロパティに対する、valueの型を設定する。
 */
{
  interface ErrorContainer {
    /**
     * { email: '正しいメールアドレスではありません。', username: '記号を含める事はできません。'}
     * などの複数のエラーメッセージを格納するコンテナを作る場合に使われる
     */
    [prop: string]: string;
  }

  interface ErrorContainer2 {
    /**
     * { email: '正しいメールアドレスではありません。', username: '記号を含める事はできません。'}
     * などの複数のエラーメッセージを格納するコンテナを作る場合に使われる
     */
    [prop: number]: string;
  }

  const errorBag: ErrorContainer = {
    email: '正しいメールアドレスではありません。',
    username: '記号を含める事はできません。',

    // 数字を指定した場合、文字列型の数字と見なされる。
    1: '有効な値を設定してください。',
  };

  const errorBag2: ErrorContainer2 = {
    1: '有効な値を設定してください。',

    // property は number 型であるのが必須
    // email: '正しいメールアドレスではありません。',
  };

  /**
   * type と interface どちらでも使うことが可能
   */
  type TUser = {
    [key: string]: string;
  };

  const user: TUser = {
    firstName: 'John',
    lastName: 'Doe',
  };

  // 追加
  user.middleName = 'T';
  user['gender'] = 'male';

  interface IUser {
    [K: number]: string;
  }

  const user2: IUser = {
    1: 'John',
    10: 'T',
    100: 'Doe',
  };

  console.log('user2[1]: ' + user2[1]);
  console.log('user2[10]: ' + user2[10]);
  console.log('user2[100]: ' + user2[100]);

  /**
   * string, numberどちらも許容する
   */
  type PersonalInfo = {
    [key: string]: string | number;
    middleName: string;
    age: number;
  };

  const pInfo: PersonalInfo = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'M',
    age: 10,
    studentNum: 30,
  };

  console.log('pInfo:');
  console.log(pInfo);
}

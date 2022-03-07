/**
 * Index Signature
 *
 * interfaceやtype aliasでオブジェクトを定義する際に
 * オブジェクトに含まれるプロパティ名を設定できる
 *
 * [key: string]
 * -> keyには任意の名前をつけることができ、その名前はstringになることを表す
 */
{
  type TUser = {
    [key: string]: string;
  }

  const user: TUser = {
    firstName: 'John',
    lastName: 'Doe'
  }

  // 追加
  user.middleName = 'T'
  user['gender'] = 'male';

  /**
   * keyに設定する型については、number or string
   */
  interface IUser {
    [K: number]: string
  }

  const user2: IUser = {
    1: 'John',
    10: 'T',
    100: 'Doe'
  }

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
    firstName: "John",
    lastName: "Doe",
    middleName: "M",
    age: 10,
    studentNum: 30
  };

  console.log('pInfo:');
  console.log(pInfo);

}

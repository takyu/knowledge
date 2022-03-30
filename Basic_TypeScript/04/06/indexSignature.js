/**
 * Index Signature
 *
 * [prop: string(or number)]: Type;
 *
 * propの部分は任意の名前でよく、property に対する型を設定します（string か number 型のみ）
 * Typeの部分はそのプロパティに対する、valueの型を設定する。
 */
{
    var errorBag = {
        email: '正しいメールアドレスではありません。',
        username: '記号を含める事はできません。',
        // 数字を指定した場合、文字列型の数字と見なされる。
        1: '有効な値を設定してください。',
    };
    var errorBag2 = {
        1: '有効な値を設定してください。',
        // property は number 型であるのが必須
        // email: '正しいメールアドレスではありません。',
    };
    var user = {
        firstName: 'John',
        lastName: 'Doe',
    };
    // 追加
    user.middleName = 'T';
    user['gender'] = 'male';
    var user2 = {
        1: 'John',
        10: 'T',
        100: 'Doe',
    };
    console.log('user2[1]: ' + user2[1]);
    console.log('user2[10]: ' + user2[10]);
    console.log('user2[100]: ' + user2[100]);
    var pInfo = {
        firstName: 'John',
        lastName: 'Doe',
        middleName: 'M',
        age: 10,
        studentNum: 30,
    };
    console.log('pInfo:');
    console.log(pInfo);
}

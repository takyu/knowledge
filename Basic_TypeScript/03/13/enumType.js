/**
 *
 * JSコンパイル時に定数として自動変換してくれる
 *
 * 役割などを定数として保持したい
 * → 定数が被らないようにしないといけないため、constで管理するのは大変
 * → enum型で管理
 */
// 大変
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
{
    var Role = void 0;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
        Role[Role["AUTHOR"] = 2] = "AUTHOR";
    })(Role || (Role = {}));
    var person = {
        name: 'John',
        age: 40,
        hobbies: ['soccer', 'tennis'],
        role: Role.ADMIN
    };
    if (person.role === Role.ADMIN) {
        console.log('ADMIN user is.');
    }
    /**
     * 定数の値を指定することも可能
     *
     * デフォルト値は0
     */
    var Role2 = void 0;
    (function (Role2) {
        Role2[Role2["ADMIN"] = 100] = "ADMIN";
        Role2[Role2["READ_ONLY"] = 101] = "READ_ONLY";
        Role2[Role2["AUTHOR"] = 102] = "AUTHOR";
    })(Role2 || (Role2 = {}));
    /**
     * stringも許容
     *
     * この場合は、全てに定数を指定する
     */
    var Role3 = void 0;
    (function (Role3) {
        Role3["ADMIN"] = "\u7BA1\u7406\u8005";
        Role3["READ_ONLY"] = "\u8AAD\u307F\u53D6\u308A";
        Role3["AUTHOR"] = "\u8457\u8005";
    })(Role3 || (Role3 = {}));
}

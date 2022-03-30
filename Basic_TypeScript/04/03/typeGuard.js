{
    function add(a, b) {
        /**
         * type guard
         *
         * union型で入ってくるために、どちらの型かを判別して型を守る
         */
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        // ここではnumber型が入ることが確定
        return a + b;
    }
    function printEmployeeInformation(emp) {
        // 両方の型に存在するのでエラーにはならない
        console.log('name: ' + emp.name);
        // エラー 片方の型にしか存在しないため
        // console.log(emp.privileges);
        // console.log(emp.startDate);
        /**
         * type guard で保証して書かなければならない
         *
         * object のなかに指定されたプロパティ（型）があるかどうか
         * 判別するためには in を使う。
         */
        if ('privileges' in emp) {
            console.log('privileges: ' + emp.privileges);
        }
        if ('startDate' in emp) {
            console.log('start Date: ' + emp.startDate);
        }
    }
    var e1 = {
        name: 'John',
        privileges: ['create-server', 'managed-server'],
        startDate: new Date(),
    };
    printEmployeeInformation(e1);
    printEmployeeInformation({
        name: 'Mike',
        startDate: new Date(),
    });
}

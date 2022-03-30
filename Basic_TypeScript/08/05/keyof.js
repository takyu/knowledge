/**
 * Keyof operator
 */
{
    var name_1 = 'name';
    var age = 'age';
    var hobby = 'hobby';
    // エラー
    // const user3: User = 'email'
    console.log(name_1);
    console.log(age);
    console.log(hobby);
    /**
     * よって、プロパティ名を取得することができるので、
     * オブジェクトに指定するプロパティ名が存在することを、
     * typescript に示してあげることができる
     */
    function extractAndConvert(obj, prop) {
        return 'value: ' + obj[prop];
    }
    // 第一引数のオブジェクトに、name プロパティが無いためにエラー
    // extractAndConvert({}, 'name')
    console.log(extractAndConvert({ name: 'Dan' }, 'name'));
}

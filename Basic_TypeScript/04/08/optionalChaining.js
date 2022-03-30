var _a;
/**
 * Optional Chaining
 *
 * ネストされたオブジェクトのプロパティに安全にアクセスすることができる
 */
{
    var fetchedUserData = {
        id: 'user1',
        name: 'name1',
        job: {
            title: 'Developer',
            description: 'Using TypeScript',
        },
    };
    // js では job オブジェクトがあるかどうかを確認して job の title をとる
    console.log(fetchedUserData.job && fetchedUserData.job.title);
    /**
     * typeScript ではコンパイル時は存在しない場合、エラーを出力してくれるが、
     * サーバーからデータを取ってくるなど、実行時の保証に対しては、
     * optional chaining を利用する。
     *
     * property_name?
     */
    /**
     * fetchedUserData があるか → fetchedUserData がある → job を見に行く
     * → job があるか → job がある → titleを見に行く
     *
     * 途中で存在しない場合（ undefined の場合 ）、アクセスを中断
     */
    console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
}

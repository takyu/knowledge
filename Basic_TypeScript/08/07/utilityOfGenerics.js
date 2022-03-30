/**
 * Utitlity of Generics
 *
 * typescript に初めから組み込まれている型
 * ( https://www.typescriptlang.org/docs/handbook/utility-types.html )
 */
{
    /**
     * 例えば、引数で渡された物を何か処理して渡したい時などに使われる。
     */
    function createCourseGoal(title, description, date) {
        /**
         * 本来は、CourseGoal 型なので、三つのプロパティを持たないといけないが、
         * Partial でそれらを optional にしたために、空のオブジェクトとして初期化可能
         */
        var courseGoal = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = date;
        // 最後は CourseGoal 型として返す
        return courseGoal;
    }
    /**
     * readonly<Type>
     *
     * Type にセットされたプロパティを全て読み取り専用にする
     */
    var names = ['Mike', 'Daniel'];
    // readonly に設定されているためにエラー
    // names.push('Dan')
}

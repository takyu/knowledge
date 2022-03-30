/**
 * Utility of Generics
 *
 * typescript に初めから組み込まれている型
 * ( https://www.typescriptlang.org/docs/handbook/utility-types.html )
 */
{
  /**
   * Partial<Type>
   *
   * 一時的に Type に渡されたオブジェクトのプロパティを optional にする。
   */
  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }

  /**
   * 例えば、引数で渡された物を何か処理して渡したい時などに使われる。
   */
  function createCourseGoal(title: string, description: string, date: Date): CourseGoal {

    /**
     * 本来は、CourseGoal 型なので、三つのプロパティを持たないといけないが、
     * Partial でそれらを optional にしたために、空のオブジェクトとして初期化可能
     */
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    // 最後は CourseGoal 型として返す
    return courseGoal as CourseGoal;
  }

  /**
   * readonly<Type>
   *
   * Type にセットされたプロパティを全て読み取り専用にする
   */
  const names: Readonly<string[]> = ['Mike', 'Daniel'];

  // readonly に設定されているためにエラー
  // names.push('Dan')
  // names.pop();

  const person: Readonly<object> = {
    name: 'John',
    age: 49,
  }

  // readonly に設定されているためにエラー
  // person.hobby = ['soccer'];
  // person.name = 'Mile'

}

/**
 * Generics of function
 *
 * 型を明確に理解して、そしてその交差型を返却する
 * 関数が呼び出された時に、そのタイプが決定する
 */
{
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    /**
     * const mergeObj: object
     */
    console.log(merge({ name: 'John' }, { age: 40 }));
    const mergeObj = merge({ name: 'Daniel' }, { age: 40 });
    /**
     * この段階では、typescript 側では object が返されることしかわからないために、
     * プロパティにアクセスできない
     */
    // console.log(mergeObj.name);
    /**
     * そこで、Generics を用いて、どんな型が入ってきても型を明確に理解するように、
     * typescript 側に伝える
     *
     * 慣習的に Type の T が使われてそこからアルファベット順に用いられる
     */
    function mergeGen(objA, objB) {
        return Object.assign(objA, objB);
    }
    /**
     * const mergeGenObj: {
     *   name: string;
     *   } & {
     *   age: number;
     * }
     */
    const mergeGenObj = mergeGen({ name: 'Dan' }, { age: 39 });
    console.log(mergeGenObj.name);
    /**
     * 関数に渡す際の引数に、タイプを具体的に記載することもできる
     *
     * がしかし、冗長なためにしっかりと記載したいという時でない限りあまり書かない。
     */
    /**
     * const mergeGenObj2: {
     *   name: string;
     *   hobby: string[];
     *   } & {
     *   age: number;
     * }
     */
    const mergeGenObj2 = mergeGen({ name: 'Mike', hobby: ['soccer'] }, { age: 49 });
    console.log(mergeGenObj2.name);
    console.log(mergeGenObj2.hobby[0]);
    console.log(mergeGenObj2.age);
}

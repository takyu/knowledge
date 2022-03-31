"use strict";
/**
 *
 * クラスデコレータやメソッドデコレータ、アクセサデコレータは、値を返すことができる
 *
 * クラスデコレーターにより、新しいコンストラクター関数（新しいクラス）を返すことによって、
 * 元のオリジナルクラスを、新しいコンストラクター関数（新しいクラス）に書き換えることが可能
 *
 * オリジナルのクラスを拡張したい場合は、継承して super を使う
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    function WithTemplate(template, hookId) {
        console.log('loaded WithTemplate factory');
        /**
         * クラスを返す、つまりコンストラクタ関数を返す関数が
         * デコレーターによってクラス定義時に実行されるので、
         * クラスがインスタンス化されないと、発火しない。
         */
        return function (originalConstructor) {
            /**
             * 元のクラスの定義を残しておきたいために、
             * 元のクラス（元のコンストラクタ関数）を継承している
             */
            return class extends originalConstructor {
                /**
                 * 新しいコンストラクタ関数にもオリジナルのコンストラクタ関数（クラス）で渡された、
                 * その引数を渡してあげる
                 *
                 * もしインスタンス化する際に引数を持たない場合、
                 * _: any[] とする事で引数を未使用で問題がないことを明示的にする。
                 */
                constructor(...args) {
                    /**
                     * オリジナルのコンストラクタ関数を実行
                     *
                     * 実行時に、name プロパティとなるバリューが渡されているので、
                     * 引数に ...args をいれる
                     */
                    super(...args);
                    // 新しく定義されたコンストラクタ関数
                    console.log('Display template.');
                    const hookEl = document.querySelector(hookId);
                    if (hookEl) {
                        hookEl.innerHTML = template;
                        hookEl
                            .querySelector('h1')
                            .insertAdjacentText('beforeend', this.name);
                    }
                }
            };
        };
    }
    let Person = class Person {
        constructor(name) {
            this.name = name;
            console.log('creating object from Person class..');
        }
    };
    Person = __decorate([
        WithTemplate('<h1>Created Person Object, Hello </h1>', '#app')
    ], Person);
    /**
     * コメントアウトすると、インスタンス化されていないので、
     * デコレータ関数が返すコンストラクタ関数が実行されないために
     * 表示されない。
     */
    // const p1 = new Person('John');
    // console.log(p1);
}

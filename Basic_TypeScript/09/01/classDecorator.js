"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * class Decorators
 *
 * @function_name
 *
 * decorators は最終的にはただの関数
 * 多くのライブラリで、関数の始めは大文字なので慣習的に大文字にしている
 */
{
    function Logger(constructor /* コンストラクタ関数（ここではPersonクラスのこと） */) {
        console.log('outputing log..');
        console.log(constructor);
    }
    /**
     * クラスに対して decorator を使用
     * decorator はクラスが定義された時点で実行される
     *
     * この場合は、一つの引数を取る
     */
    let Person = class Person {
        constructor() {
            this.name = 'Mike';
            console.log('creating Person object..');
        }
    };
    Person = __decorate([
        Logger
    ], Person);
    const person = new Person();
    console.log(person);
}

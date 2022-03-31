"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    /**
     * 関数を返す関数を作成
     *
     */
    function Logger(logString) {
        return function (constructor) {
            console.log(logString);
            console.log(constructor);
        };
    }
    /**
     * デコレーター関数を返す関数を()をつけて実行
     *
     * → メリットとしてはその際に引数を持たせることができる
     * → デコレーター関数に値を渡せることができる
     */
    let Person = class Person {
        constructor() {
            this.name = 'Mike';
            console.log('creating Person object..');
        }
    };
    Person = __decorate([
        Logger("outputing log.. in Person class")
    ], Person);
    const person = new Person();
    console.log(person);
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * multiple decorators
 *
 * 一つのクラスに対して、複数のデコレーターを適用できる
 */
{
    function Logger(logString) {
        console.log('Function Logger read as decorator.');
        return function (_) {
            console.log(logString);
        };
    }
    function WithTemplate(template, hookId) {
        console.log('Function WithTemplate read as decorator.');
        return function (_) {
            let hookEl = document.querySelector(hookId);
            if (hookEl) {
                hookEl.innerHTML = template;
                console.log('finished to write template by WithTemplate function');
            }
        };
    }
    /**
     * 複数のデコレーターを適用した場合、下から上に向かってデコレーター関数は実行される
     *
     * しかし、デコレーター関数の作成は、JSの仕様通り、上から下に向かって作成される。
     *
     * デコレータファクトリーによるデコレータ関数の作成 ( @Logger → @WithTemplate )
     * → デコレータ関数の実行 ( @WithTemplate → @Logger )
     */
    let Person = class Person {
        constructor(name) {
            this.name = name;
            console.log('creating Person object..');
        }
    };
    Person = __decorate([
        Logger('Loading Person Class..'),
        WithTemplate('<h1>Person Object( Person Class )</h1>', '#app')
    ], Person);
    const person = new Person('John');
    console.log(person);
}

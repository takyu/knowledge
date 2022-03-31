"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    function WithTemplate(template, hookId) {
        /**
         * ここでは、constructor 関数が使われない
         * → 引数で _ を指定することで、引数を受け取りはするが、使わない
         * ことを明示的にすることができる。
         */
        return function (_ /* constructor: Function */) {
            const hookEl = document.querySelector(hookId);
            if (hookEl) {
                hookEl.innerHTML = template;
            }
        };
    }
    let Person = class Person {
        constructor(name) {
            this.name = name;
            console.log('creating Person object..');
        }
    };
    Person = __decorate([
        WithTemplate('<h1>Person Object( Person Class )</h1>', '#app')
    ], Person);
    /**
     * コメントアウトしてインスタンス化しなくても、
     * Person クラスを読み込んだ時点で関数が実行されている
     */
    const person = new Person('Mike');
    console.log(person);
    /**
     * デコレーター内で、コンストラクタ関数を実行し（インスタンス化）
     * そのオブジェクトを使って表示させる
     */
    function WithTemplateAndDisplayProperty(template, hookId) {
        return function (constructor) {
            const hookEl = document.querySelector(hookId);
            const p = new constructor('Dan');
            if (hookEl) {
                hookEl.innerHTML = template;
                hookEl.querySelector('h1').insertAdjacentText('beforeend', p.name);
            }
        };
    }
    let Person2 = class Person2 {
        constructor(name) {
            this.name = name;
            console.log('creating Person2 object..');
        }
    };
    Person2 = __decorate([
        WithTemplateAndDisplayProperty('<h1>Loaded Person2 Object. Hello, </h1>', '#app2')
    ], Person2);
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    function Autobind(_, _2 /* ここでは、string しかし、使わない */, descriptor) {
        const originalMethod = descriptor.value;
        // adjusted descriptor
        const adjDescriptor = {
            configurable: true,
            enumerable: false,
            /**
             * 何らかの処理をした後の value（ここでは、showMessage関数）を返す
             * → get の中で、value ( 一旦、変数に格納した originalMethod )
             * を、bind して返す。
             */
            get() {
                /**
                 * get method は、プロパティとオブジェクトの間のレイヤーみたいな物なので、
                 * EventListenerから変更されることは無い。
                 *
                 * ここでの this はデコレーターの対象メソッドが所属している
                 * オブジェクトを常に指す
                 */
                return originalMethod.bind(this);
            },
        };
        return adjDescriptor;
    }
    class Printer {
        constructor() {
            this.message = 'clicked!!';
        }
        /**
         * method decorator を使用し、常に this が Printer クラスから生成された
         * オブジェクトを指すようにする
         */
        showMessage() {
            console.log(this.message);
        }
    }
    __decorate([
        Autobind
    ], Printer.prototype, "showMessage", null);
    const p = new Printer();
    const button = document.querySelector('button');
    // 本来の js ではここでbind
    // button.addEventListener('click', p.showMessage.bind(p));
    button.addEventListener('click', p.showMessage);
}

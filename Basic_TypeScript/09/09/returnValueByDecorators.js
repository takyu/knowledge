"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 値を返すことができるデコレータは
 * クラスデコレータ、メソッドデコレータ、アクセサデコレータ
 *
 * プロパティデコレータとパラメータデコレータも一応返すことができるが、
 * まだサポートはされていないので何も起きない
 */
{
    function ManipulateAccessor(target, name, descriptor) {
        console.log('Accessor Decorators');
        console.log(target);
        console.log(name);
        console.log(descriptor);
        return {
            /**
             * オブジェクトの各設定も変えられる
             *
             * 以下はデフォルト値
             */
            enumerable: false,
            configurable: true,
            get: () => {
                return 'Tokyo Taro';
            },
        };
    }
    function ManipulateMethod(target, name, descriptor) {
        console.log('Method Decorators');
        console.log(target);
        console.log(name);
        console.log(descriptor);
        return {
            /**
             * オブジェクトの各設定も変えられる
             *
             * 以下はデフォルト値
             */
            writable: true,
            enumerable: false,
            configurable: true,
            value: () => {
                return 'Monja';
            },
        };
    }
    class JapanesePerson {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            console.log('Creating object from JpanesePerson class..');
        }
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }
        famousFood() {
            return 'Takoyaki';
        }
    }
    __decorate([
        ManipulateAccessor
    ], JapanesePerson.prototype, "fullName", null);
    __decorate([
        ManipulateMethod
    ], JapanesePerson.prototype, "famousFood", null);
    console.dir(JapanesePerson);
    /**
     * Accessor, Method Decorator によって書き換えられている
     */
    const p1 = new JapanesePerson('Taro', 'Osaka');
    console.log(p1.fullName);
    console.log(p1.famousFood());
}

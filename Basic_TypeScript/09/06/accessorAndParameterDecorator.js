"use strict";
/**
 * Accessor Decorators
 *
 * instance accessor に対して decorator を設定した場合。
 *
 * 第一引数 - クラスのプロトタイプ
 * 第二引数 - accessor_name: string
 * 第三引数 - property descriptor
 * ( 与えられたオブジェクトの特定のプロパティの構成を記述したもの )
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
 *
 * static accessor に対して decorator を設定した場合。
 *
 * 第一引数 - コンストラクタ関数
 * 第二引数 - accessor_name: string
 * 第三引数 - property descriptor
 * ( 与えられたオブジェクトの特定のプロパティの構成を記述したもの )
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Method Decorators
 *
 * instance method に対して decorator を設定した場合。
 *
 * 第一引数 - クラスのプロトタイプ
 * 第二引数 - method_name: string | Symbol
 * 第三引数 - property descriptor
 * ( 与えられたオブジェクトの特定のプロパティの構成を記述したもの )
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
 *
 * static method に対して decorator を設定した場合。
 *
 * 第一引数 - コンストラクタ関数
 * 第二引数 - method_name: string | Symbol
 * 第三引数 - property descriptor
 * ( 与えられたオブジェクトの特定のプロパティの構成を記述したもの )
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
 *
 */
/**
 * Parameter Decorators
 *
 * instance method に対して decorator を設定した場合。
 *
 * 第一引数 - クラスのプロトタイプ
 * 第二引数 - method_name: string | Symbol
 * 第三引数 - 引数の順番（何番目にその引数が設定されているか）
 *
 * static method に対して decorator を設定した場合。
 *
 * 第一引数 - コンストラクタ関数
 * 第二引数 - method_name: string | Symbol
 * 第三引数 - 引数の順番（何番目にその引数が設定されているか）
 */
{
    function LogForProperty(target, propertyName) {
        console.log('%c [called] Property Decorators', 'color: aqua; font-size: 1.2em');
        console.log(target);
        console.log(propertyName);
    }
    function LogForAccessor(target, name, descriptor) {
        console.log('%c [called] Accessor Decorators', 'color: orange; font-size: 1.2em');
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }
    function LogForMethod(target, name, descriptor) {
        console.log('%c [called] Method Decorators', 'color: red; font-size: 1.2em');
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }
    function LogForParameter(target, name /* [ 注意 ] methodの名前 */, position) {
        console.log('%c [called] Parameter Decorators', 'color: skyblue; font-size: 1.2em');
        console.log(target);
        console.log(name);
        console.log(position);
    }
    class Product {
        constructor(t, p) {
            this.title = t;
            this._price = p;
            Product.category = 'apple';
        }
        set price(val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('specify a price of 1 yen or more.');
            }
        }
        static get amount() {
            return 100;
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
        static getShopName(
        /**
         * ここでも、デコレーター関数が実行されるのは下から
         */
        name, location) {
            return `In ${location}, shop ${name}`;
        }
    }
    __decorate([
        LogForProperty
    ], Product.prototype, "title", void 0);
    __decorate([
        LogForProperty
    ], Product.prototype, "_price", void 0);
    __decorate([
        LogForAccessor
    ], Product.prototype, "price", null);
    __decorate([
        LogForMethod,
        __param(0, LogForParameter)
    ], Product.prototype, "getPriceWithTax", null);
    __decorate([
        LogForProperty
    ], Product, "category", void 0);
    __decorate([
        LogForAccessor
    ], Product, "amount", null);
    __decorate([
        LogForMethod,
        __param(0, LogForParameter),
        __param(1, LogForParameter)
    ], Product, "getShopName", null);
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Property Decorators
 *
 * instance property に対してと static property に対してデコレータを設定したときの
 * 引数が違う
 *
 * instance property に対して decorator を設定した場合。
 *
 * 第一引数 - クラスのプロトタイプ
 * 第二引数 - property_name: string | Symbol
 *
 * static property に対して decorator を設定した場合。
 *
 * 第一引数 - コンストラクタ関数
 * 第二引数 - property_name: string | Symbol
 */
{
    function LogForProperty(target, propertyName) {
        console.log('%c [called] Property Decorators', 'color: orange; font-size: 1.2em');
        console.log(target);
        console.log(propertyName);
    }
    class Product {
        constructor(t, p) {
            this.title = t;
            this._price = p;
        }
        set price(val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('specify a price of 1 yen or more.');
            }
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
    }
    __decorate([
        LogForProperty
    ], Product.prototype, "title", void 0);
    __decorate([
        LogForProperty
    ], Product.prototype, "_price", void 0);
    __decorate([
        LogForProperty
    ], Product, "category", void 0);
}

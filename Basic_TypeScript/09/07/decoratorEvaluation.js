"use strict";
/**
 * デコレーターが評価される順序
 *
 * 1. instance
 *
 *  1. parameter decorator
 *
 *  2. method decorator
 *
 *  3. accessor decorator
 *
 *  4. property decorator
 *
 * 2. static
 *
 *  1. parameter decorator
 *
 *  2. method decorator
 *
 *  3. accessor decorator
 *
 *  4. property decorator
 *
 * 3. constructor
 *
 * 4. class
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
var Product_1;
{
    function LoggerForClass(timingText) {
        console.log('%c loaded LoggerForClass Factory', 'font-size: 1.5em');
        return function (constructor) {
            console.log(`%c From ${timingText}, called decorators`, 'color: yellow; font-size:1.2em');
            console.log(constructor);
        };
    }
    function LoggerForProperty(timingText) {
        console.log('%c loaded LoggerForProperty Factory', 'font-size: 1.5em');
        return function (target, propertyName) {
            console.log(`%c From ${timingText}, called decorators`, 'color: aqua; font-size: 1.2em');
            console.log(target);
            console.log(propertyName);
        };
    }
    function LoggerForAccessor(timingText) {
        console.log('%c loaded LoggerForAccessor Factory', 'font-size: 1.5em');
        return function (target, name, descriptor) {
            console.log(`%c From ${timingText}, called decorators`, 'color: orange; font-size: 1.2em');
            console.log(target);
            console.log(name);
            console.log(descriptor);
        };
    }
    function LoggerForMethod(timingText) {
        console.log('%c loaded LoggerForMethod Factory', 'font-size: 1.5em');
        return function (target, name, descriptor) {
            console.log(`%c From ${timingText}, called decorators`, 'color: red; font-size: 1.2em');
            console.log(target);
            console.log(name);
            console.log(descriptor);
        };
    }
    function LoggerForParameter(timingText) {
        console.log('%c loaded LoggerForParameter Factory', 'font-size: 1.5em');
        return function (target, name /* [ 注意 ] methodの名前 */, position) {
            console.log(`%c From ${timingText}, called decorators`, 'color: skyblue; font-size: 1.2em');
            console.log(target);
            console.log(name);
            console.log(position);
        };
    }
    let Product = Product_1 = class Product {
        constructor(t, p) {
            this.title = t;
            this._price = p;
            Product_1.category = 'fruits';
            console.log('%c [[ created Product Object ]]', 'color: lightgreen; font-size: 1.5em');
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
        static getShopName(name, location) {
            return `In ${location}, shop ${name}`;
        }
    };
    __decorate([
        LoggerForProperty('instance property')
    ], Product.prototype, "title", void 0);
    __decorate([
        LoggerForProperty('instance property')
    ], Product.prototype, "_price", void 0);
    __decorate([
        LoggerForAccessor('instance accessor')
    ], Product.prototype, "price", null);
    __decorate([
        LoggerForMethod('instance method'),
        __param(0, LoggerForParameter('parameter'))
    ], Product.prototype, "getPriceWithTax", null);
    __decorate([
        LoggerForProperty('static property')
    ], Product, "category", void 0);
    __decorate([
        LoggerForAccessor('staitc accessor')
    ], Product, "amount", null);
    __decorate([
        LoggerForMethod('static method'),
        __param(0, LoggerForParameter('parameter')),
        __param(1, LoggerForParameter('parameter'))
    ], Product, "getShopName", null);
    Product = Product_1 = __decorate([
        LoggerForClass('class')
    ], Product);
    const p1 = new Product('apple', 100);
    const p2 = new Product('grape', 200);
}

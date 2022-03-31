"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    const registeredValidators = {};
    function Required(target, name) {
        var _a, _b;
        registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [name]: [
                ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[name]) !== null && _b !== void 0 ? _b : []),
                'required',
            ] });
    }
    function PositiveNumber(target, name) {
        var _a, _b;
        registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [name]: [
                ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[name]) !== null && _b !== void 0 ? _b : []),
                'required',
            ] });
    }
    function validate(obj) {
        const objValidatorConfig = registeredValidators[obj.constructor.name];
        if (!objValidatorConfig) {
            return true;
        }
        let isValid = true;
        for (const prop in objValidatorConfig) {
            for (const validator of objValidatorConfig[prop]) {
                switch (validator) {
                    case 'required':
                        isValid = isValid && !!obj[prop]; // !! をつけることによって、boolean で返すことができる
                    case 'positive':
                        isValid = isValid && obj[prop] > 0;
                }
            }
        }
        return isValid;
    }
    function WithTemplate(template, hookId) {
        return function (_) {
            const hookEl = document.querySelector(hookId);
            if (hookEl) {
                hookEl.insertAdjacentHTML('beforebegin', template);
            }
        };
    }
    let Course = class Course {
        constructor(t, p) {
            this.title = t;
            this.price = p;
        }
    };
    __decorate([
        Required
    ], Course.prototype, "title", void 0);
    __decorate([
        PositiveNumber
    ], Course.prototype, "price", void 0);
    Course = __decorate([
        WithTemplate('<h1>Validate by Decorators</h1>', 'body')
    ], Course);
    const courseForm = document.querySelector('form');
    courseForm.addEventListener('submit', (e) => {
        // HTTP Request を回避
        e.preventDefault();
        const titleEl = document.querySelector('#title');
        const priceEl = document.querySelector('#price');
        const title = titleEl.value;
        const price = +priceEl.value;
        /**
         * ここで、空文字列や価格が0円以上といったバリデーションをかけることができるが、
         * 項目を追加するごとにここに書かなければならない
         *
         * → validation はクラスにまとめて書きたい
         * → decorator を使う
         */
        // if (!(title.trim().length > 0 && price > 0)) return;
        const createCourse = new Course(title, price);
        if (!validate(createCourse)) {
            alert('正しく入力してください。');
            return;
        }
        console.log(createCourse);
    });
}

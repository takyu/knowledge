// エラーとならない所をエラーにする
'use strict';

const obj = {
	prop: 0
};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(descriptor);

const obj2 = {};

Object.defineProperty(obj2, 'prop', {
	value: 0
})

// ストリクトモードを使わないと、下記がエラーにならない
// obj2.prop = 1;
console.log(obj2.prop);

const obj3 = {};

Object.defineProperty(obj3, 'prop', {
	value: 0,
	writable: true
});

obj3.prop = 1;
console.log(obj3.prop);

const obj4 = {};

Object.defineProperty(obj4, 'prop', {
	configurable: true,
	value: 0,
	writable: true
});

delete obj4.prop;

console.log(obj4.prop);
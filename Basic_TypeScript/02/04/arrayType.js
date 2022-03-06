/**
 * Array type
 */
var fruits = [
    'apple',
    'banana'
];
console.log(fruits);
var fruits2 = [
    'orange',
    'grape'
];
console.log(fruits2);
// 決まった型しか入らない
// const fruits3: Array<string> = [
//   'apple',
//   10
// ]
// 複数の方を入れたい場合、union型を使う
var food = [
    'apple pie', 10
];
console.log(food);
var food2 = [
    'cinnamon pie', 20
];
console.log(food2);

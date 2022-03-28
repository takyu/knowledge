/**
 * Literal Type
 *
 * 受け取る値を指定
 */
function combine(input1, input2, 
// どちらかの文字列しか受け取らない
resultConversion) {
    var res;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
var combineNums = combine(40, 30, 'as-number');
console.log('🚀 ~ file: LiteralType.ts ~ line 29 ~ combineNums', combineNums);
var combineNums2 = combine(40, 30, 'as-text');
console.log('🚀 ~ file: LiteralType.ts ~ line 32 ~ combineNums2', combineNums2);
var combineStrings = combine('banana', 'apple', 'as-text');
console.log('🚀 ~ file: LiteralType.ts ~ line 35 ~ combineStrings', combineStrings);

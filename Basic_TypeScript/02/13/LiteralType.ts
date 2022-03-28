/**
 * Literal Type
 *
 * 受け取る値を指定
 */

function combine(
  input1: number | string,
  input2: number | string,

  // どちらかの文字列しか受け取らない
  resultConversion: 'as-number' | 'as-text'
) {
  let res;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    res = +input1 + +input2;
  } else {
    res = input1.toString() + input2.toString();
  }

  return res;
}

const combineNums = combine(40, 30, 'as-number');
console.log('🚀 ~ file: LiteralType.ts ~ line 29 ~ combineNums', combineNums);

const combineNums2 = combine(40, 30, 'as-text');
console.log('🚀 ~ file: LiteralType.ts ~ line 32 ~ combineNums2', combineNums2);

const combineStrings = combine('banana', 'apple', 'as-text');
console.log(
  '🚀 ~ file: LiteralType.ts ~ line 35 ~ combineStrings',
  combineStrings
);

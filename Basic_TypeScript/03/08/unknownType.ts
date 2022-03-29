/**
 * Unknown Type
 */
let userInput: unknown;
let userName: string;

userInput = 4;
userInput = 'Taro';

/**
 * userInputがここではstring型であることが保証されていないので、
 * 代入することができない
 */
// userName = userInput;

/**
 * 型が指定されている変数に代入する場合は、
 * if文等でチェックしなければならない
 */
if (typeof userInput === 'string') {
  userName = userInput;
}

console.log('🚀 ~ file: unknownType.ts ~ line 22 ~ userName', userName);

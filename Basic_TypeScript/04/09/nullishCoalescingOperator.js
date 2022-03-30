/**
 * Nullish Coalescing Operator
 *
 * null もしくは undefined の場合、後ろの要素が選択される
 */
{
    var userInputNull = null;
    var userInputUndefined = undefined;
    var userInputEmptyString = '';
    var userInputZero = 0;
    var storedData = void 0;
    // falsyな値は, 'default' になる → 空文字列も 'default' に。( 0も同様 )
    storedData = userInputNull || 'default';
    console.log(storedData);
    storedData = userInputUndefined || 'default';
    console.log(storedData);
    storedData = userInputEmptyString || 'default';
    console.log(storedData);
    storedData = userInputZero || 'default';
    console.log(storedData);
    storedData = userInputNull !== null && userInputNull !== void 0 ? userInputNull : 'default';
    console.log(storedData);
    storedData = userInputUndefined !== null && userInputUndefined !== void 0 ? userInputUndefined : 'default';
    console.log(storedData);
    // null, undefined しか後方の要素を取らないので、falsy な 0, 空文字列は表示される
    storedData = userInputEmptyString !== null && userInputEmptyString !== void 0 ? userInputEmptyString : 'default';
    console.log(storedData);
    storedData = userInputZero !== null && userInputZero !== void 0 ? userInputZero : 'default';
    console.log(storedData);
}

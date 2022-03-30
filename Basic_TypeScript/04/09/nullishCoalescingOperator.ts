/**
 * Nullish Coalescing Operator
 *
 * null もしくは undefined の場合、後ろの要素が選択される
 */
{
  const userInputNull = null;
  const userInputUndefined = undefined;
  const userInputEmptyString = '';
  const userInputZero = 0;

  let storedData;

  // falsyな値は, 'default' になる → 空文字列も 'default' に。( 0も同様 )
  storedData = userInputNull || 'default';
  console.log(storedData);

  storedData = userInputUndefined || 'default';
  console.log(storedData);

  storedData = userInputEmptyString || 'default';
  console.log(storedData);

  storedData = userInputZero || 'default';
  console.log(storedData);

  storedData = userInputNull ?? 'default';
  console.log(storedData);

  storedData = userInputUndefined ?? 'default';
  console.log(storedData);

  // null, undefined しか後方の要素を取らないので、falsy な 0, 空文字列は表示される
  storedData = userInputEmptyString ?? 'default';
  console.log(storedData);

  storedData = userInputZero ?? 'default';
  console.log(storedData);

}

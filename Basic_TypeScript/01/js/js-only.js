const sumJs = document.querySelector('#sum-js');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');

function addJs(num1, num2) {

  /**
   * number型で入ってこない、valueはstring
   * ->jsでは確かめてやる必要がある。
   */
  // return num1 + num2;

  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {

    // 符号をつけて数値型と認識させる
    return +num1 + +num2;
  }
}

sumJs.addEventListener('click', _ => {
  console.log(addJs(input1.value, input2.value));
})

// !はそのDOM要素が必ず存在していることを保証する
const sumTs = document.querySelector('#sum-ts')!;

// 本来は以下の二つの書き方
const button2: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#sum-ts')!;
const button3: HTMLButtonElement = document.querySelector('#sum-ts')! as HTMLButtonElement;

/**
 * type assertion の書き方一つめ
 * → asを付ける
 */
const input3 = document.querySelector('#num3')! as HTMLInputElement;

/**
 * type assertion の書き方二つめ
 * → <>の中に型を書く
 */
const input4: HTMLInputElement = <HTMLInputElement>document.querySelector('#num4')!;

function addTs(num1: number, num2: number) {
  return num1 + num2;
}

sumTs.addEventListener('click', _ => {
  console.log(addTs(+input3.value, +input4.value));
})

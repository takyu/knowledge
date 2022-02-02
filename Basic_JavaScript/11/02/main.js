// bodyタグ取得
const body = document.querySelector('body');

// divタグ作成
const div = document.createElement('div');

// divに内容を差し込む
div.innerHTML = 0;

// divに属性をつける
div.setAttribute('class', 'green');

// divをbodyに差し込む
body.appendChild(div);
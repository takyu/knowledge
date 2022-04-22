import { gsap } from 'gsap';

init();
function init() {
  /**
   * to の第一引数は、DOMElement or query string
   *
   * また、object の値も緩急をつけながら変更できる。
   */
  gsap.to('.box', {
    // y軸方向の動き
    y: 200,

    // x軸方向の動き
    // x: 200,

    // アニメーションさせる時間
    duration: 2,

    // border-radius cssのオプションを設定 → 丸める
    borderRadius: '50%',

    // scale 拡大・縮小
    scale: 2,

    // background cssのオプションを設定 → 背景色を変える
    background: 'green',

    // animation 開始時間を遅らせる
    delay: 1,

    // rotate 図形の回転
    rotate: 360,

    // repeat 繰り返す回数を指定。-1 とすると無限ループ。
    repeat: -1,

    // yoyo 往復するアニメーションを設定
    yoyo: true,

    // ease アニメーションの緩急を定義
    ease: 'bounce.inOut',
  });

  const obj = { value: 0 };
  gsap.to(obj, {
    // value プロパティの値を 1 まで滑らかに変更
    value: 1,

    duration: 2,
    delay: 1,
    ease: 'elastic.inOut(1, -2)',

    // value 値が変更される毎に実行されるコールバック関数
    onUpdate() {
      console.log(obj.value);
    },

    // animation が完了した際に呼ばれるコールバック関数
    onComplete() {
      alert('animation end');
    },
  });
}

import Swiper from '../../node_modules/swiper/swiper-bundle.esm.browser.min.js';

class HeroSlider {
	constructor(el) {
		this.el = el;
		this.swiper = this._initSwuiper();
	}

	_initSwuiper() {
		return new Swiper(this.el, {

			// sliderするかどうか
			loop: true,

			// 切り替わり方
			effect: 'coverflow',

			// スライダーが中央揃えになる
			centeredSlides: true,

			// 表示されているビューに何枚の画像を配置するか明示的に示す。
			slidesPerView: 1,

			// スライドからスライドにトランジションする間隔 1s
			speed: 1000,

			// window幅のサイズによって設定値を変える
			breakpoints: {

				// width > 1024px
				1024: {
					slidesPerView: 2
				}

			},

			// cursorがパーの手になる
			grabCursor: true
		});
	}

	// 自動で切り替わる設定の開始
	start(options = {} /* autoplayのオプション */) {

		// デフォルトのoptionsとマージしてオプションを代入
		this.swiper.params.autoplay = Object.assign({
			// 間隔 4s
			delay: 4000,

			// 画像を操作しても、きちんと3sごとに切り替わる
			disableOnInteraction: false
			// 付けない場合は、操作した後自動切り替えが無効に
			//disableOnInteraction: true
		}, options);

		this.swiper.autoplay.start();
	}
	
	// 自動で切り替わる設定の終了
	stop() {
		this.swiper.autoplay.stop();
	}
}

export { HeroSlider };
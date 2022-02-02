import { nodeOps as ns } from './nodeOps.js';
import { HeroSlider as hs} from './hero-slider.js';

ns.on(document, 'DOMContentLoaded', () => {

	// Web上で一番初めに表示される画像のスライドのことを、「Hero Slider」という。
	const hero = new hs('.swiper');
	hero.start();
	//hero.start({delay: 1000});
});

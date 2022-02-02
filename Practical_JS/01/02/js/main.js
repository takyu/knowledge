import { nodeOps as ns } from "./nodeOps.js";
const child = ns.qs('.child');

const options = {
	root: null,
	rootMargin: "300px 0px 300px 0px",
	threshold: [0, 0.5, 1]
}
const io = new IntersectionObserver(cb, options);

io.observe(child);

function cb(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('inview');
			console.log('inview');
			
			// inviewに入った瞬間追うのやめる
			//observer.unobserve(entry.target);
		} else {
			entry.target.classList.remove('inview');
			console.log('out view');
		}
	});
	//alert('intersecting');
}
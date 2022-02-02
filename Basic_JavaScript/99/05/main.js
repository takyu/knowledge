import { effect, reactive } from './reactive.js'

const obj1 = reactive({
	a: 0,
	b: 1
})
const obj2 = reactive({
	a: 0
})

console.log('%c---- launch prop access ----', 'font-size: 2em;');
effect(() => {
	console.log('effect1: ', obj1.a);
})
effect(() => {
	console.log('effect1-2: ', obj1.a);
})
effect(() => {
	console.log('effect3: ', obj1.b);
})
effect(() => {
	console.log('effect2: ', obj2.a)
})

console.log('%c---- launch prop set ----', 'font-size: 2em;');
obj1.a = 1;
obj1.b = 3;
obj2.a = 2;

import { effect, reactive } from './reactive.js'

const obj1 = reactive({
	a: 0
})
const obj2 = reactive({
	a: 0
})

effect(() => {
	console.log('effect1: ', obj1.a);
})
effect(() => {
	console.log('effect2: ', obj2.a)
})

obj1.a = 1;
obj2.a = 2;

import { effect, reactive } from './reactive.js'

// objはProxyオブジェクト
const obj = reactive({
	a: 0
})

effect(() => {
	console.log(obj.a);
})
// trigger();
obj.a = 1;
obj.a = 2;

// trigger();
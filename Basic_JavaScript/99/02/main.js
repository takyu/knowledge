import { trigger, effect } from "./reactive.js";

const obj = {
	a: 0
};

effect(() => {
	console.log(obj.a);
});
trigger();
obj.a = 1;
trigger();
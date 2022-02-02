import { reactive, computed } from "./reactive.js";

const obj = reactive({
	a: 0
});

const computedValue = computed(() => {
	return obj.a + 10;
});

obj.a = 1;
console.log(computedValue.value);
obj.a = 2;
console.log(computedValue.value);

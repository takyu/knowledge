console.log('ESmodule called');

let privateVal = 0;
export let publicVal = {prop: 10};

export function publicFn() {
	console.log('publicFn called: ' + publicVal.prop)
	console.log("call fn times: " + ++privateVal);
}

function privateFn() {
	
}
/**
 * Create an iteratable object, named by "IteratableObject"
 * The following methods are available as well as Array.
 * 
 * set(key, value)
 * forEach
 * map
 * filter
 * 
 * Use "for.... .of", it should have the same behavior as Map.(*)
 */

 class IteratableObject {
	constructor(obj) {
		for(let prop in obj) {
			this[prop] = obj[prop];
		}
	}
	print(label = '') {
		console.log(`%c${label}`, 'color: green;', this);
		return this;
	}

	/* Implemented as follows */
	set(key, value) {
		this[key] = value;
		return this;
	}

	forEach(callback) {
		for (let [k, v] of this) {
			callback(v, k, this);
		}
	}

	map(callback) {
		const newInstance = new IteratableObject();
		for (let [k, v] of this) {
			newInstance[k] = callback(v, k, this);
		}
		return newInstance;
	}

	filter(callback) {
		const newInstance = new IteratableObject();
		for (let [k, v] of this) {
			if (callback(v, k, this)) {
				newInstance[k] = v; 
			}
		}
		return newInstance;
	}

	// (*)
	*[Symbol.iterator]() {
		for (let key in this) {
			yield [key, this[key]];
		}
	}

}

const original = new IteratableObject({
	key1: 'value1',
	key2: 'value2',
	key3: 'value3',
});
console.log('original', original);

// confirm iterator
for (let [k, v] of original) {
	console.log(k, v);
}

// confirm forEach
original.forEach(v => { console.log(v) });


const result = original
	.map((v, i, obj) => v + ' exist')
	.print('after map')
	.set('key4', 'value4')
	.print('after set')
	.filter((val, key) => key === 'key4');

console.log('result', result);
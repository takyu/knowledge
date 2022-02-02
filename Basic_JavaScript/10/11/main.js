/**
 * Inherit from Array and implement the following methods.
 * 
 * push
 * forEach
 * map
 * filter
 * reduce
 * 
 * This time, push and forEach are implemented so that
 * they can be connected as chain methods.
 */

 class MyArray extends Array {
	constructor(...args) {
		super(...args)
	}
	print(label = '') {
		console.log(`%c${label}`, 'color: green;', this);
		return this;
	}

	/* Implemented as follows */
	push(val) {
		super.push(val);
		return this;
	}

	forEach(callback) {
		for (let i = 0; i < this.length; i++) {
			callback(this[i], i, this);
		}
		return this;
	}

	map(callback) {
		const newInstance = new MyArray();
		for (let i = 0; i < this.length; i++) {
			const result = callback(this[i], i, this);
			newInstance.push(result);
		}
		return newInstance;
	}

	filter(callback) {
		const newInstance = new MyArray();
		for (let i = 0; i < this.length; i++) {
			if (callback(this[i], i, this)) {
				newInstance.push(this[i]);
			}
		}
		return newInstance;
	}

/*
	reduce(callback, initVal) {
		let k = 0;
		let accu;

		if (initVal !== undefined) {
			accu = initVal;
		} else {
			accu = this[k++];
		}
		while(k < this.length) {
			accu = callback(accu, this[k]);
			k++;
		}
		return accu;
	}
*/

	reduce(callback, accu) {
		const tmpArry = [...this];

		if (accu === undefined) {
			accu = tmpArry.shift();
		}
		for (let i = 0; i < tmpArry.length; i++) {
			accu = callback(accu, tmpArry[i]);
		}
		return accu;
	}

}

const original = new MyArray(1, 2, 3, 4);
console.log('original', original);

const result = original
	.forEach((v, i, arry) => {
		console.log(v, i, arry);
	})
	.map((v, i, obj) => v * 2)
	.print('After map')
	.push(5)
	.print('After push')
	.filter((v, i) => v > 2)
	.print('After filter')
	.reduce((accu, curr) => accu + curr)

console.log('result', result);
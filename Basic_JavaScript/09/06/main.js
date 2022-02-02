class C {
	constructor() {
		function fn() {
			console.log(this);
		}
		fn();
	}

	method() {
		function fn() {
			console.log(this);
		}
		fn();
	}
}

const c = new C();
c.method();

// 外側にある関数に対してはnon-strictモードのためwindowオブジェクトを参照
function fn() {
	console.log(this);
}

class D {
	constructor() {
		fn();
	}

	method() {
		fn();
	}
}

const d = new D();
d.method();

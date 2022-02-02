function printEquality(a, b) {
	if (a === b) {
		console.log("strict equivalence");
	} else if (a == b) {
		console.log("abstract equivalence");
	} else {
		console.log("not equivalence")
	}
}

let a = '1';
let b = 1;

let c = true;

printEquality(a, b);
printEquality(b, c);
printEquality(b, Number(c));

let e = "";
let f = 0;
let g = "0";
printEquality(e, f);
printEquality(Number(e), f);
printEquality(f, g);
printEquality(f, Number(g));
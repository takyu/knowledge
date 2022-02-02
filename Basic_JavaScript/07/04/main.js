const arry = [1, 2, 3, 4, 5];

// for
for(let i=0; i < arry.length; i++) {
	console.log(arry[i]);
}

// while
let v, i = 0;

// arry[5]はundefined -> falsyな値 -> ループを抜ける
while (v = arry[i++]) {
	console.log(v);
}
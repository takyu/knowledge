// window.fetch()が本来だが、windowオブジェクトであるために省略可能
let res = fetch('users.json');

// Promiseのインスタンスが返されている
console.log(res);

res.then((response) => {
	console.log(response);

	// JSONのオブジェクトが格納されているレスポンスオブジェクトから、json()メソッドを使って、
	// JSONのデータ形式を取得。
	return response.json();
}).then((json) => {
	console.log(json);

	for (let user of json) {
		console.log(`I'm ${user.name}, ${user.age} years old`);
	}
})

// async / await を使って書く
async function fetchUsers() {
	const response = await fetch('users.json');
	console.log(response);

	const json = await response.json();
	console.log(json);

	for (let user of json) {
		console.log(`I'm ${user.name}, ${user.age} years old`);
	}
}

fetchUsers();
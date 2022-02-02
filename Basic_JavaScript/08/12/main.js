try {
	console.log('start');
	throw new Error();
	console.log('end');
} catch(e) {
	console.error(e);
} finally {
	console.log('bye');
}

/*
// theme11のJSONファイル取得をきちっとエラーハンドリングさせて書く
async function fetchUsers() {
	const response = await fetch('users.json');
	const json = await response.json();

	for (let user of json) {
		console.log(`I'm ${user.name}, ${user.age} years old`);
	}
}
*/
async function fetchUsers() {
	const response = await fetch('users.json');

	// ファイルが応答した場合
	if (response.ok) {
		const json = await response.json();

		// エラーハンドリング (中身が空 -> 取得要素の長さが0の場合)
		if(!json.length)
			throw new NoDataError('Data is not found');
		
		return json;
	} else {
		throw new NoFileError('file is not found');
	}
}

// カスタムエラーの定義(条件分岐を作りたい時)
class NoDataError extends Error {
	constructor(message) {
		super(message);

		// エラーの名前を自分のカスタムエラーの名前にする
		this.name = 'NoDataError'
	}
}

class NoFileError extends Error {
	constructor(message) {
		super(message);
		this.name = 'NofileError'
	}
}

async function init() {
	try {
		const users = await fetchUsers();
		// throw new Error();
		for (let user of users) {
			console.log(`I'm ${user.name}, ${user.age} years old`);
		}
	} catch(e) {
		if (e instanceof NoDataError)
			console.error(e);
		else if (e instanceof NoFileError)
			console.error(e);
		else
			console.log('Oops, something went wrong');
	} finally {
		console.log('bye');
	}
}

init();

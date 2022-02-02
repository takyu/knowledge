let obj = {
	prop1: 'value1',
	prop2: 'value2',

	// オブジェクトのプロパティに格納された関数->メソッド
	prop3: function() {
		console.log('value3');
	},
	prop4: {
		prop5: 'value5'
	}
}
obj.prop3();
console.log(obj.prop1);
console.log(obj.prop4.prop5);

// objに対して後から追加することも可能
obj.prop6 = 'value6';

// ブラケット記法
console.log(obj['prop6'])

// オブジェクト自体を見る
console.log(obj);
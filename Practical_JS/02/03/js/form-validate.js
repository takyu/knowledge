import { nodeOps as ns } from './nodeOps.js';

init();
function init() {
	const $input = ns.qs('.validate-target');
	ns.on($input, 'input', (e) => {

		// 渡ってきたDOMオブジェクト
		console.dir(e.currentTarget);
		// DOMオブジェクトに渡ってきた値
		console.dir(e.currentTarget.value);

		const $target = e.currentTarget;
		console.log($target.validity);
		if ($target.validity.ValueMissing) {
			alert ('値の入力が必須です。');
		} else if ($target.validity.tooShort) {
			alert (`${$target.minLength}文字以上で入力してください。\n現在の文字数は${$target.value.length}文字です。`)
		} else if ($target.validity.tooLong) {
			alert (`${$target.maxLength}文字以上で入力してください。\n現在の文字数は${$target.value.length}文字です。`)
		} else if ($target.validity.patternMismatch) {
			alert (`半角英数値で入力してください。`)
		}
		alert('値が変更されました。');
	})
}
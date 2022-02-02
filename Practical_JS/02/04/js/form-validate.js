import { nodeOps as ns } from './nodeOps.js';

// init form-validation
(function init() {
	const $inputs = ns.qsAl('.validate-target');

	$inputs.forEach($input => {
		ns.on($input, 'input', (e) => {
			const $target = e.currentTarget;
			console.dir($target);
			console.log($target.validity);
			if ($target.checkValidity()) {
				$target.classList.add('is-valid');
				$target.classList.remove('is-invalid');
			} else {
				$target.classList.add('is-invalid');
				$target.classList.remove('is-valid');
				if ($target.validity.ValueMissing) {
					console.log('値の入力が必須です。');
				} else if ($target.validity.tooShort) {
					console.log(`${$target.minLength}文字以上で入力してください。\n現在の文字数は${$target.value.length}文字です。`)
				} else if ($target.validity.tooLong) {
					console.log(`${$target.maxLength}文字以上で入力してください。\n現在の文字数は${$target.value.length}文字です。`)
				} else if ($target.validity.patternMismatch) {
					console.log(`半角英数値で入力してください。`)
				}
			}
		})
	});
})();
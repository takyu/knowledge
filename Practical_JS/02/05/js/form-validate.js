import { nodeOps as ns } from './nodeOps.js';

const activateSubmitBtn = $form => {
	const $submitBtn = ns.qs('[type="submit"]', $form);

	if ($form.checkValidity()) {
		ns.rmAttr($submitBtn, 'disabled');
	} else {
		ns.setAttr($submitBtn, 'disabled', true);
	}
}

// init form-validation
(function validate_form() {
	const $inputs = ns.qsAl('.validate-target');
	const $form = ns.qs('.validate-form');

	if (!$form) {
		return;
	}

	$inputs.forEach($input => {
		ns.on($input, 'input', (e) => {
			const $target = e.currentTarget;
			const $feedback = $target.nextElementSibling;

			activateSubmitBtn($form);

			if (!$feedback.classList.contains('invalid-feedback')) {
				return;
			}

			if ($target.checkValidity()) {

				$target.classList.add('is-valid');
				$target.classList.remove('is-invalid');

				$feedback.textContent = '';

			} else {

				$target.classList.add('is-invalid');
				$target.classList.remove('is-valid');
				
				if ($target.validity.valueMissing) {
					$feedback.textContent = '値の入力が必須です。';
				} else if ($target.validity.tooShort) {
					$feedback.textContent = `${$target.minLength}文字以上で入力してください。現在の文字数は${$target.value.length}文字です。`;
				} else if ($target.validity.tooLong) {
					$feedback.textContent = `${$target.maxLength}文字以上で入力してください。現在の文字数は${$target.value.length}文字です。`;
				} else if ($target.validity.patternMismatch) {
					$feedback.textContent = `半角英数値で入力してください。`
				}

			}

		})
	});
	activateSubmitBtn($form);
})();
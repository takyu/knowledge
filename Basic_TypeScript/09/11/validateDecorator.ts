{
  interface ValidatorConfig {
    [prop: string]: {
      [validatableProp: string]: string[]; // ['required', 'positive' ...]
    };
  }

  const registeredValidators: ValidatorConfig = {};

  function Required(target: any, name: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [name]: [
        ...(registeredValidators[target.constructor.name]?.[name] ?? []),
        'required',
      ],
    };
  }

  function PositiveNumber(target: any, name: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [name]: [
        ...(registeredValidators[target.constructor.name]?.[name] ?? []),
        'required',
      ],
    };
  }

  function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
      return true;
    }

    let isValid = true;

    for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
        switch (validator) {
          case 'required':
            isValid = isValid && !!obj[prop]; // !! をつけることによって、boolean で返すことができる
          case 'positive':
            isValid = isValid && obj[prop] > 0;
        }
      }
    }
    return isValid;
  }

  function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
      const hookEl = document.querySelector(hookId);

      if (hookEl) {
        hookEl.insertAdjacentHTML('beforebegin', template);
      }
    };
  }

  @WithTemplate('<h1>Validate by Decorators</h1>', 'body')
  class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
      this.title = t;
      this.price = p;
    }
  }

  const courseForm = document.querySelector('form')!;

  courseForm.addEventListener('submit', (e) => {
    // HTTP Request を回避
    e.preventDefault();

    const titleEl = <HTMLInputElement>document.querySelector('#title')!;
    const priceEl = document.querySelector('#price')! as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    /**
     * ここで、空文字列や価格が0円以上といったバリデーションをかけることができるが、
     * 項目を追加するごとにここに書かなければならない
     *
     * → validation はクラスにまとめて書きたい
     * → decorator を使う
     */
    // if (!(title.trim().length > 0 && price > 0)) return;

    const createCourse = new Course(title, price);

    if (!validate(createCourse)) {
      alert('正しく入力してください。');
      return;
    }
    console.log(createCourse);
  });
}

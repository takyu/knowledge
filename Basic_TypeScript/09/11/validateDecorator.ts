{
  /**
   * クラス、プロパティごとのバリデーション設定を保存する型
   */
  interface ValidatorConfig {
    [prop: string /* クラス名 */]: {
      [validatableProp: string /* プロパティ名 */]: string[]; // ['required', 'positive' ...]
    };
  }

  const registeredValidators: ValidatorConfig = {};

  /**
   * Object initializer
   *
   * object の property を value によって定義している
   * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
   *
   * registeredValidators[target.constructor.name // ここでは、Course ] = {} は、
   * const registeredValidators = {
   *  Course: {}
   * }
   * を意味する。さらに、
   *
   * registeredValidators[target.constructor.name] = {
   *  [name // ここでは、property の名前として title]: ['required']
   * }; は、
   *
   * const registeredValidators = {
   *  Course: {
   *    title: ['required']
   *  };
   * }
   * を意味する。
   */
  function Required(target: any, name: string) {
    registeredValidators[
      target.constructor.name /* ここでは、Course という名前 */
    ] = {
      /**
       * クラスのプロパティに対するバリデーションを毎回新しいオブジェクトに
       * 上書きされるのを防ぐために、上書きされる前のバリデーションを
       * コピーしておく。
       */
      ...registeredValidators[target.constructor.name],
      [name]: [
        /**
         * 一つのバリデータの値しか配列に保存されないことを防ぐために、
         * 上書きされる前にあったバリデータの値を上書きしてから追加する。
         */
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

  function validate(obj: any /* さまざまなオブジェクトを受け取れるようにする */) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
      // validation 設定が無いので、する必要がない　→ 正しいと判断
      return true;
    }

    /**
     * そもそも、そのクラスに対しての validate が登録されておらず、
     * 一回もループしないことが有り得るので、初期値として、true を設定
     */
    let isValid = true;

    /**
     * 各 property に登録されている validator と property をの組み合わせをループさせる
     */
    for (const prop in objValidatorConfig) {
      /**
       * その property に登録されているすべての validate をループさせる
       */
      for (const validator of objValidatorConfig[prop]) {
        switch (validator) {
          case 'required':

            // !! をつけることによって、truethy な値を boolean で返すことができる
            isValid = isValid && !!obj[prop]; // 途中で一つでも false があれば、&演算子により、false
            break;

          case 'positive':
            isValid = isValid && obj[prop] > 0;
            break;
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

/**
 * 値を返すことができるデコレータは
 * クラスデコレータ、メソッドデコレータ、アクセサデコレータ
 *
 * プロパティデコレータとパラメータデコレータも一応返すことができるが、
 * まだサポートはされていないので何も起きない
 */
{
  function ManipulateAccessor(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    console.log('Accessor Decorators');
    console.log(target);
    console.log(name);
    console.log(descriptor);

    return {
      /**
       * オブジェクトの各設定も変えられる
       *
       * 以下はデフォルト値
       */
      enumerable: false,
      configurable: true,

      get: () => {
        return 'Tokyo Taro';
      },
    };
  }

  function ManipulateMethod(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    console.log('Method Decorators');
    console.log(target);
    console.log(name);
    console.log(descriptor);

    return {
      /**
       * オブジェクトの各設定も変えられる
       *
       * 以下はデフォルト値
       */
      writable: true,
      enumerable: false,
      configurable: true,
      value: () => {
        return 'Monja';
      },
    };
  }
  class JapanesePerson {
    constructor(public firstName: string, public lastName: string) {
      console.log('Creating object from JpanesePerson class..');
    }

    @ManipulateAccessor
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }

    @ManipulateMethod
    famousFood() {
      return 'Takoyaki';
    }
  }

  console.dir(JapanesePerson);

  /**
   * Accessor, Method Decorator によって書き換えられている
   */
  const p1 = new JapanesePerson('Taro', 'Osaka');
  console.log(p1.fullName);
  console.log(p1.famousFood());
}

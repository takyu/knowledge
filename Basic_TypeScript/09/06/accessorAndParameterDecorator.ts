/**
 * Accessor Decorators
 *
 * instance accessor に対して decorator を設定した場合。
 *
 * 第一引数 - クラスのプロトタイプ
 * 第二引数 - accessor_name: string
 * 第三引数 - property descriptor
 * ( 与えられたオブジェクトの特定のプロパティの構成を記述したもの )
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
 *
 * static accessor に対して decorator を設定した場合。
 *
 * 第一引数 - コンストラクタ関数
 * 第二引数 - accessor_name: string
 * 第三引数 - property descriptor
 * ( 与えられたオブジェクトの特定のプロパティの構成を記述したもの )
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
 *
 */

/**
 * Method Decorators
 *
 * instance method に対して decorator を設定した場合。
 *
 * 第一引数 - クラスのプロトタイプ
 * 第二引数 - method_name: string | Symbol
 * 第三引数 - property descriptor
 * ( 与えられたオブジェクトの特定のプロパティの構成を記述したもの )
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
 *
 * static method に対して decorator を設定した場合。
 *
 * 第一引数 - コンストラクタ関数
 * 第二引数 - method_name: string | Symbol
 * 第三引数 - property descriptor
 * ( 与えられたオブジェクトの特定のプロパティの構成を記述したもの )
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
 *
 */

/**
 * Parameter Decorators
 *
 * instance method に対して decorator を設定した場合。
 *
 * 第一引数 - クラスのプロトタイプ
 * 第二引数 - method_name: string | Symbol
 * 第三引数 - 引数の順番（何番目にその引数が設定されているか）
 *
 * static method に対して decorator を設定した場合。
 *
 * 第一引数 - コンストラクタ関数
 * 第二引数 - method_name: string | Symbol
 * 第三引数 - 引数の順番（何番目にその引数が設定されているか）
 */
{
  function LogForProperty(target: any, propertyName: string | Symbol) {
    console.log(
      '%c [called] Property Decorators',
      'color: aqua; font-size: 1.2em'
    );
    console.log(target);
    console.log(propertyName);
  }

  function LogForAccessor(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(
      '%c [called] Accessor Decorators',
      'color: orange; font-size: 1.2em'
    );
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function LogForMethod(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log(
      '%c [called] Method Decorators',
      'color: red; font-size: 1.2em'
    );
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function LogForParameter(
    target: any,
    name: string | Symbol /* [ 注意 ] methodの名前 */,
    position: number
  ) {
    console.log(
      '%c [called] Parameter Decorators',
      'color: skyblue; font-size: 1.2em'
    );
    console.log(target);
    console.log(name);
    console.log(position);
  }

  class Product {
    @LogForProperty
    title: string;
    @LogForProperty
    private _price: number;
    @LogForProperty
    static category: string;

    @LogForAccessor
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('specify a price of 1 yen or more.');
      }
    }
    @LogForAccessor
    static get amount() {
      return 100;
    }

    @LogForMethod
    getPriceWithTax(@LogForParameter tax: number) {
      return this._price * (1 + tax);
    }

    @LogForMethod
    static getShopName(
      /**
       * ここでも、デコレーター関数が実行されるのは下から
       */
      @LogForParameter name: string,
      @LogForParameter location: string
    ) {
      return `In ${location}, shop ${name}`;
    }

    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
      Product.category = 'apple';
    }
  }
}

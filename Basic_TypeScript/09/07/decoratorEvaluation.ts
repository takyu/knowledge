/**
 * デコレーターが評価される順序
 *
 * 1. instance
 *
 *  1. parameter decorator
 *
 *  2. method decorator
 *
 *  3. accessor decorator
 *
 *  4. property decorator
 *
 * 2. static
 *
 *  1. parameter decorator
 *
 *  2. method decorator
 *
 *  3. accessor decorator
 *
 *  4. property decorator
 *
 * 3. constructor
 *
 * 4. class
 */

{
  function LoggerForClass(timingText: string) {
    console.log('%c loaded LoggerForClass Factory', 'font-size: 1.5em');

    return function (constructor: Function) {
      console.log(
        `%c From ${timingText}, called decorators`,
        'color: yellow; font-size:1.2em'
      );
      console.log(constructor);
    };
  }

  function LoggerForProperty(timingText: string) {
    console.log('%c loaded LoggerForProperty Factory', 'font-size: 1.5em');
    return function (target: any, propertyName: string | Symbol) {
      console.log(
        `%c From ${timingText}, called decorators`,
        'color: aqua; font-size: 1.2em'
      );
      console.log(target);
      console.log(propertyName);
    };
  }

  function LoggerForAccessor(timingText: string) {
    console.log('%c loaded LoggerForAccessor Factory', 'font-size: 1.5em');
    return function (
      target: any,
      name: string,
      descriptor: PropertyDescriptor
    ) {
      console.log(
        `%c From ${timingText}, called decorators`,
        'color: orange; font-size: 1.2em'
      );
      console.log(target);
      console.log(name);
      console.log(descriptor);
    };
  }

  function LoggerForMethod(timingText: string) {
    console.log('%c loaded LoggerForMethod Factory', 'font-size: 1.5em');
    return function (
      target: any,
      name: string | Symbol,
      descriptor: PropertyDescriptor
    ) {
      console.log(
        `%c From ${timingText}, called decorators`,
        'color: red; font-size: 1.2em'
      );
      console.log(target);
      console.log(name);
      console.log(descriptor);
    };
  }

  function LoggerForParameter(timingText: string) {
    console.log('%c loaded LoggerForParameter Factory', 'font-size: 1.5em');
    return function (
      target: any,
      name: string | Symbol /* [ 注意 ] methodの名前 */,
      position: number
    ) {
      console.log(
        `%c From ${timingText}, called decorators`,
        'color: skyblue; font-size: 1.2em'
      );
      console.log(target);
      console.log(name);
      console.log(position);
    };
  }

  @LoggerForClass('class')
  class Product {
    @LoggerForProperty('instance property')
    title: string;
    @LoggerForProperty('instance property')
    private _price: number;
    @LoggerForProperty('static property')
    static category: string;

    @LoggerForAccessor('instance accessor')
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('specify a price of 1 yen or more.');
      }
    }
    @LoggerForAccessor('staitc accessor')
    static get amount() {
      return 100;
    }

    @LoggerForMethod('instance method')
    getPriceWithTax(@LoggerForParameter('parameter') tax: number) {
      return this._price * (1 + tax);
    }

    @LoggerForMethod('static method')
    static getShopName(
      @LoggerForParameter('parameter') name: string,
      @LoggerForParameter('parameter') location: string
    ) {
      return `In ${location}, shop ${name}`;
    }

    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
      Product.category = 'fruits';
      console.log(
        '%c [[ created Product Object ]]',
        'color: lightgreen; font-size: 1.5em'
      );
    }
  }

  const p1 = new Product('apple', 100);
  const p2 = new Product('grape', 200);
}

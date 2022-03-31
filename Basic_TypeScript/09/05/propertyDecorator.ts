/**
 * Property Decorators
 *
 * instance property に対してと static property に対してデコレータを設定したときの
 * 引数が違う
 *
 * instance property に対して decorator を設定した場合。
 *
 * 第一引数 - クラスのプロトタイプ
 * 第二引数 - property_name: string | Symbol
 *
 * static property に対して decorator を設定した場合。
 *
 * 第一引数 - コンストラクタ関数
 * 第二引数 - property_name: string | Symbol
 */
{
  function LogForProperty(target: any, propertyName: string | Symbol) {
    console.log(
      '%c [called] Property Decorators',
      'color: orange; font-size: 1.2em'
    );
    console.log(target);
    console.log(propertyName);
  }
  class Product {
    @LogForProperty
    title: string;
    @LogForProperty
    private _price: number;
    @LogForProperty
    static category: string;

    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }

    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('specify a price of 1 yen or more.');
      }
    }

    getPriceWithTax(tax: number) {
      return this._price * (1 + tax);
    }
  }
}

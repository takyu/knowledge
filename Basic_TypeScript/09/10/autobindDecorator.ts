{
  function Autobind(
    _: any,
    _2: string /* ここでは、string しかし、使わない */,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    // adjusted descriptor
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,

      /**
       * 何らかの処理をした後の value（ここでは、showMessage関数）を返す
       * → get の中で、value ( 一旦、変数に格納した originalMethod )
       * を、bind して返す。
       */
      get() {
        /**
         * get method は、プロパティとオブジェクトの間のレイヤーみたいな物なので、
         * EventListenerから変更されることは無い。
         *
         * ここでの this はデコレーターの対象メソッドが所属している
         * オブジェクトを常に指す
         */
        return originalMethod.bind(this);
      },
    };
    return adjDescriptor;
  }

  class Printer {
    message = 'clicked!!';

    /**
     * method decorator を使用し、常に this が Printer クラスから生成された
     * オブジェクトを指すようにする
     */
    @Autobind
    showMessage() {
      console.log(this.message);
    }
  }

  const p = new Printer();

  const button = document.querySelector('button')!;

  // 本来の js ではここでbind
  // button.addEventListener('click', p.showMessage.bind(p));

  button.addEventListener('click', p.showMessage);
}

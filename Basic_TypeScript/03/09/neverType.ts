/**
 * Never type
 *
 * どんな値も入れることができず決して戻ることのない
 * （例外をスローする関数など）関数の型
 *
 * voidはreturnでの戻り値なしの型なのに対して
 * neverはそもそもreturnしない。
 */
const one = () => {};

const two = () => {
  return;
};

const three = () => {
  while (true) {}
};

// エラーになる
// let oneVal: never = one()
// let twoVal: never = two()

// そもそも返さないのでエラーにならない
let threeVal: never = three();

/**
 * Error関係
 */
function generateError(message: string, code: number): never {
  throw {
    message: message,
    code: code,
  };
}

const result = generateError('Unexpected error has occured.', 500);

// undefinedすら返されない
console.log('🚀 ~ file: neverType.ts ~ line 39 ~ result', result);

interface Car {
  type: 'car';
  count: number;
}

interface Airplane {
  type: 'airplane';
  name: string;
}

interface Other {
  type: 'other';
}

type Vehicle = Car | Airplane | Other;

function typicalVehicle(v: Vehicle) {
  if (v.type === 'car') {
    return 'Toyota';
  } else if (v.type === 'airplane') {
    return `${name}です`;
  } else {
    /**
     * 全て網羅できていれば、_exhaustiveCheckはnever型になる
     * 網羅できていなければ代入され、errorを引き起こす
     */
    // const _exhaustiveCheck: never = v;
  }
}

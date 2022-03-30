/**
 * Type Guard
 */
{
  type Combinable = string | number;
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric;

  function add(a: Combinable, b: Combinable) {
    /**
     * type guard その１
     *
     * primitive型では、typeofで判別
     * union型で入ってくるために、どちらの型かを判別して型を守る
     */
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }

    // ここではnumber型が入ることが確定
    return a + b;
  }

  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  type ElevatedEmployee = Admin & Employee;

  type UnknownEmployee = Admin | Employee;

  function printEmployeeInformation(emp: UnknownEmployee) {
    // 両方の型に存在するのでエラーにはならない
    console.log('name: ' + emp.name);

    // エラー 片方の型にしか存在しないため
    // console.log(emp.privileges);
    // console.log(emp.startDate);

    /**
     * type guard その２
     *
     * object型では、inで判別
     * object のなかに指定されたプロパティ（型）があるかどうか
     */
    if ('privileges' in emp) {
      console.log('privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
      console.log('start Date: ' + emp.startDate);
    }
  }

  const e1: ElevatedEmployee = {
    name: 'John',
    privileges: ['create-server', 'managed-server'],
    startDate: new Date(),
  };

  printEmployeeInformation(e1);

  printEmployeeInformation({
    name: 'Mike',
    startDate: new Date(),
  });

  class Car {
    drive() {
      console.log('Driving..');
    }
  }

  class Truck {
    drive() {
      console.log('driving truck..');
    }

    loadCargo(amount: number) {
      console.log('carry baggage..: ' + amount + 'kg');
    }
  }

  type Vehicle = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  function useVehicle(vehicle: Vehicle) {
    // 両方の型に存在するメソッドなのでエラーにならない
    vehicle.drive();

    // エラー Truck型にしか存在しないため
    // vehicle.loadCargo(1000);

    /**
     * type guard その２
     *
     * 先ほどと同様にオブジェクト型なので in を使う
     */
    // if ('loadCargo' in vehicle) {
    //   vehicle.loadCargo(1000);
    // }

    /**
     * type guard その３
     *
     * instance of を使う
     * こちらはクラスで確認する際に使われる。
     *
     * クラスで確認する際は、プロパティ名を間違えるという心配がないために、
     * こちらを使う。
     *
     * また、interfaceは ts でのみ使用され js で認識されないので、
     * interfaceで宣言されている型を instanceof で確認する事はできない。
     */
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }

  useVehicle(v1);
  useVehicle(v2);
}

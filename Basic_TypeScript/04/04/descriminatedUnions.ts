/**
 * Descriminated Unions
 */
{
  interface Bird {
    /**
     * Literal type
     *
     * interfaceがこの型を持っているわけではなく、判別される際に使われる
     */
    type: 'bird';

    flyingSpeed: number;
  }

  interface Horse {
    type: 'horse';
    runningSpeed: number;
  }

  type Animal = Bird | Horse;

  function moveAnimal(animal: Animal) {
    let speed;

    console.log('you choice: ' + animal.type);
    switch (animal.type) {
      case 'bird':
        speed = animal.flyingSpeed;
        break;
      case 'horse':
        speed = animal.runningSpeed;
        break;
    }
    console.log('moving speed: ' + speed);
  }

  moveAnimal({
    type: 'bird',
    flyingSpeed: 100,
    // runnningSpeed: 100 // エラー
  });
  moveAnimal({
    type: 'horse',
    runningSpeed: 40,
    // flyingSpeed: 40, // エラー
  });
}

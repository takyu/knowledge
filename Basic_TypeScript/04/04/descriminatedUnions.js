{
    function moveAnimal(animal) {
        var speed;
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
    });
}

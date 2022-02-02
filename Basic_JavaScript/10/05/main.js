import { Person, Person2 } from './person.js';

const tim = new Person('Tim');
tim.hello();

// プライベート変数にアクセスできてしまう
console.log(tim._name);

const bob = new Person2('Bob');
bob.hello();

// プライベート変数にアクセスできない
console.log(bob._name);
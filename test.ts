abstract class A {
  abstract run(): Promise<void>
}

export class B extends A {
  async run(): Promise<void> {
  }
}

const I = new B();

console.log("I instanceof A =", I instanceof A);
console.log("I instanceof B =", I instanceof B);

class Car {}

class BigCar extends Car {};
const auto = new BigCar();

console.log(auto instanceof BigCar);
console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true


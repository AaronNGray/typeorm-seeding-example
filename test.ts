abstract class A {
  abstract run(): Promise<void>
}

export class B implements A {
  async run(): Promise<void> {
  }
}

const I = new B();

console.log("I instanceof A =", I instanceof A);
console.log("I instanceof B =", I instanceof B);

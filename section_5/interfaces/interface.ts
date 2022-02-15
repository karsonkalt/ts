interface Named {
  readonly name: string;
}

// We can combine interfaces with extends
interface Greetable extends Named {
  readonly name: string;
  greet(phrase: string): void;
}

// We can use the properties of these interfaces with the implements keyword
class Person implements Greetable, Named {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

const person1 = new Person("karson");
person1.name = "patrick";

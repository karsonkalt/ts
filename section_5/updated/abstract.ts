abstract class Person {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    abstract goToWork(): void;
}

// Now person can't be instantiated

// This is a singleton that also can't be instantiated
class Karson extends Person {
    private static instance: Karson;

    private constructor(name, age){
        super(name, age)
    }

    goToWork() {
        console.log("My name is Karson and I'm a programmer")
    }

    static getInstance() {
        if (Karson.instance) return this.instance
        this.instance = new Karson("karson", 29)
    }
}
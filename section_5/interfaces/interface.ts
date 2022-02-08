interface Person {
    name: string;
    hungry: boolean;
}

// Interface for class, objects, and functions
const karson: Person = {name: "karson", tired: false}

class Karson implements Person {
    name: string;
    hungry: boolean;
}

interface Greeting {
    (name: string): string;
}

const myGreeting: Greeting = (name: string): string => {
    return `Hello ${name}`
}
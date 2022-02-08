class Maths {

    static isFun = "YES!"

    // Can not be instatntiated
    private constructor() {}

    static multiply(num1: number, num2: number): number {
        return num1 * num2
    }
}

console.log(Maths.multiply(2, 3))
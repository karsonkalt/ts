// Called a generic is because we can put whatever type we want here.

type numArray = Array<string>

const last = (arr: Array<number>) => {
    return arr[arr.length - 1]
}

const l = last([1, 2, 3])
const l2 = last(["a", "b", "c")

// Gives us an error becuase our function doesn't need to be specific to numbers.
// it can work with any type of array.

// What if we changed to any?
const last2 = (arr: Array<any>) => {
    return arr[arr.length - 1]
}
// Now the return is of type any, but we know the return should be the type that was passed in
// It's commonly reffered to as T but it could be anything, T stands for type.
const last3 = <T>(arr: T[]): T => {
    return arr[arr.length - 1]
}

// Can explicitly say what the data type is of the array.
const l3 = last3<string>(["a", "b", "c"])
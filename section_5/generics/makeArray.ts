const makeArr = (x: number) => {
    return [x]
}

const v = makeArr(5)

// Let's refactor and make this work for a string
const v2 = makeArr("a")

const makeArr2 = <T, Y>(x: T, y: Y) => {
    return [x, y]
}
// Right now TS is implying a return of (T | Y)[]
// But it's more of a tuple, let's define

const makeArr3 = <T, Y>(x: T, y: Y): [T, Y] => {
    return [x, y]
}

// We can also set a default value
const makeArr4 = <T, Y = number>(x: T, y: Y): [T, Y] => {
    return [x, y]
}

const v3 = makeArr4<string>("hello", 3)

// What if we wanted to constrain what the user could pass to the function

const makeFullName = (obj) => {
    return {
        ...obj,
        fullName: obj.firstName + obj.lastName
    }
}
// Function takes in an object, expects object to have certain properties

const makeFullName2 = (obj: {firstName: string; lastName: string}) => {
    return {
        ...obj,
        fullName: obj.firstName + obj.lastName
    }
}
// Well now I can't pass in anything other than an object that matches exactly

const makeFullName3 = <T extends {firstName: string; lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + obj.lastName
    }
}

const v4 = makeFullName3({firstName: "bob", lastName: "smith", location: "nyc"})
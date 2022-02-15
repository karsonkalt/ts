type AddFn = (a: number, b: number) => number;

let adder: AddFn = (a: number, b: number) => {
  return a + b;
};

interface AddFn2 {
  (a: number, b: number): number;
}

let adder2: AddFn2 = (a: number, b: number) => {
  return a + b;
};

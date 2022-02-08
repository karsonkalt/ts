# Data Types in TS

- number 123
  - no difference between integers and floats
  - Same as JS, no difference
- string 'hello'
- boolean true
- object {}
  - In TS there are more specific types of objects than there are in JS
- Array []
  - Type can be flexible or fixed.
- Tuple []
  - New for TS, does not exist in JS
  - Fixed length and fixed type
- Enum {}
  - Only exists in TS world.
  - Gives us an enumerated list, human readable labels.
  - Like a 'from choice of options' dropdown
  - In JS people will create global constants and assign them a number value, and call them as properties
  - Typically all-uppercase values
- Any \*
  - Accepts anything and we won't get an error from TS
  - Takes away all advantages TS gives us
    - Turns off all type checking
- Union |
  - Can be a choice of data types
- Void
  - No return
- Unknown
  - Different than any because it still will do type checking.
- Never
  - Will never get a return type to make it really clear that it never returns anything.
  - Only used on return values of functions

_note:_ Primitive types in TS are all lowercase

# Statically Typed

- No new errors at runtime, only at compilation and during development.
- `typeof` in js will return a string of the type of the evaluated operand
- In regular JS we can check `typeof` in js at runtime and then `throw new Error` to send error to the console. This will make it fail at runtime.
- We could have avoided this before though with typescript.
- TypeScript is `statically typed`. They don't change at runtime. Technically it could in runtime, but we sould see the error while compiling or in the IDE.
- JS only knows about a couple of types, but TypeScript knows about more.
- JS uses dynamic types (resolved at runtime). Typescript uses Static Types (set development)

# Objects

- We need to be more specific about objects in TS. When we want to create spcific objects for type constraints, we do it as we assign the constraint

# Personal Notes

- Use `for` loop with the keyword `of` will dynamically assign variable for each item in array like in python
- An `IIFE` is an iffy aka a functions which execute itself. Immediately invoked funciton expression.

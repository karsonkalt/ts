# Notes

- Using `tsc --init` will watch the entire folder and recompile for changes.
- Similarly `tsc <filname> --watch` will watch just that one file.
- Then I can just run `tsc` without pointing to a specific file.

Inside of `tsconfig.json`, we can add another key, value of `"exclude": ["node_modules"]` to keep that file out of the project, we actually don't really need to add it because typescript will ignore it by default.

We also have `"include": ["app.ts"]` and that will tell it only to compile the things listed. We also have `"files": [""]`, I'm not sure how it's different from indlude though.

`"compilerOptions": {}` has bunch of options. We can tell it which version of javascript to compile to.

`"lib"` option lets us tell the compiler what things are globally available. For example `document` object. There are some defaults applied automatically. All DOM obejects are imported by default. If I import it in, then it will not include the default DOM libraries. We can add a lib of `dom` in the array and it will import all the dom globals. We can add `es6` to add the ES6 things. There is `dom.iterable`, and `scripthost` which are all the defaults.

`allowJs` will allow javascript to be compiled. `checkJs` will check JS files for errors.

`sourceMap` helps us with debugging and development. This will allow the sources in the devtools to see the `.ts` files. When we enable and recompile we get a bridge file that allows the browser to see ts.

## File Structure

The `src` files usually holds `.ts`, and the `dist` folder usually holds the compiled `.js`. We can tell the typescript compiler where to compile the js to with `outDir`. The `rootDir` will let us tell it where to find the ts files. It will only look in that one directory.

`noEmitOnError`. Even if we have an error, TS will create the JS file.

`noImplicitAny` ensures that we are clear about the values of our parameters and the values we are working with in our code.
`strictNullChecks` will look for things that might be null or unefined and give us an error. For example `document.querySelector(".button")` might not find that class and return null, so TS would throw an error.

We can use the `!` operator to tell TS, yes this will exist, don't give me the error. A better way would be nest any event listener inside of `if (button)`.

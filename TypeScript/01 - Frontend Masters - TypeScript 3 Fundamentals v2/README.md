# Today I Learned...

---

### TypeScript

**Frontend Masters: TypeScript 3 Fundamentals v2**
_https://frontendmasters.com/courses/typescript-v2/introduction/_

### Notes:

##### Basic Usage:

_Compile your .ts file into a browser recognisable .js file (ES3 By default)_
`tsc [filename].ts`

_As above, but defining the ES version_
`tsc [filename].ts --target ES2015`

_As above, but async/await compatible... Probably not for production_
`tsc [filename].ts --target ES2017`

_As above, but allows for node compatibility (modules/export)_
`tsc [filename].ts --target ES2017 --module commonjs`

_As above, but watches for updates_
`tsc [filename].ts --target ES2017 --module commonjs --watch`

##### Configuration

_Create a **tsconfig.json** file in the root dir to negate the need for all of the above_

_Determine which files are the inputs_

```json
{
    "files": [],
    // Or preferrably
    "include": ["src"]
}
```

_How is it being compiled?_

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es2017",
        "outDir": "lib"
    }
}
```

_Now this is in place, all we have to do is run `tsc` and we should have a lib folder that contains our compiled code containing index.js:_

> examples/hello-ts/lib

_Some futher compiler options_

```json
{
    "declaration": true, // index.d.ts   - Type declaration file
    "sourceMap": true, // index.js.map - Map the js back to the original TS source
    "jsx": "react", // Native React support to parse jsx (tsx)
    "strict": true, // Enables "strict" features for tighter TS
    "noImplicitAny": true // Ensures type safety
}
```

_When running tsc, we will now also see an index.d.ts and index.js.map files_

##### TypeScript and Babel

A general rule would be to allow TypeScript to compile the most modern version of JS (esnext), and then let babel take the compilation the rest of the way (see @babel/preset-env)

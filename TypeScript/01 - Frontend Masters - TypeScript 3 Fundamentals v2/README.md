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

```tson
{
    "files": [],
    // Or preferrably
    "include": ["src"]
}
```

_How is it being compiled?_

```tson
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

```tson
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

##### Variables

**Let**

```ts
let x = "Hello world"; // string type (initialized with a string, doesn't need to be declared)
x = "Hello Mars"; // can be reassigned to another string
x = 12; // ERROR: cannot be reassigned to a non-string
```

**Const**

```ts
const y = "Hello world"; // "y" is literally the string "Hello world" and cannot be anything else due to being a constant
y = "hey!"; // ERROR: this isn't okay!
```

```ts
const obj = { hello: "world" };
obj.hello = "mars"; // This is okay
```

**Declaring a variable without initializing it**

```ts
let z;
z = 41;
z = "abc"; // z has an implicit "any" type.  This is sometimes okay, but only when you REALLY want to allow anything
```

_improvement_

```ts
let zz: number;
zz = 41;
zz = "abc"; // ERROR - This isn't the number you were looking for!
```

**Arrays**

```ts
let aa = []; // BAD - This is a "never" type - An array of "anything" is too flexible
aa.push(33);
aa.push("abc"); // ERROR!
```

_improvement_

```ts
let aa: number[] = []; // array of numbers type
aa.push(33);
aa.push("abc"); // ERROR - Not a number
```

_or_

```ts
let aa: (number | string)[] = [];
aa.push(44);
aa.push("def"); // This is okay!
```

**Tuples (Array of a fixed length)**

```ts
let bb: [number, string, string, number]; = [123, "Fake Street", "Nowhere, UK", 456];
bb = [1, 2, 3]; // ERROR - Incorrect Types!
```

**Objects**

```ts
let cc: { houseNumber: number; streetName: string };

// Error - Expects a houseNumber
cc = {
    streetName: "Fake Street",
};

// Error - Doesn't expect "x"
cc = {
    houseNumber: 3,
    streetName: "Fake Street",
    x: false,
};

let cc: { houseNumber?: number; streetName: string };

// Good - houseNumber is optional
cc = {
    streetName: "Fake Street",
};
```

**Re-Usable Types (Interfaces)**

```ts
interface Address {
    houseNumber: number;
    streetName?: string;
}

let ee: Address = { houseNumber: 12 };
```

**Union Types**

```ts
export interface HasPhoneNumber {
    name: stirng;
    phone: number;
}

export interface HasEmail {
    name: string;
    email: string;
}

// Roll the dice - Both of these are okay!
let contactInfo: HasEmail | HasPhoneNumber =
    Math.random() > 0.5
        ? {
              // we can assign it to a HasPhoneNumber
              name: "Mike",
              phone: 3215551212,
          }
        : {
              // or a HasEmail
              name: "Mike",
              email: "mike@example.com",
          };
```

**Intersection Types**

```ts
let alsoContactInfo: HasEmail & HasPhoneNumber = {
    name: "Nick",
    phone: 07777777777,
    email: "nickis@hotmail.com",
};

// Because alsoContactInfo MUST include everything - We can confidently access all properties

alsoContactInfo.name;
alsoContactInfo.phone;
alsoContactInfo.email;
```

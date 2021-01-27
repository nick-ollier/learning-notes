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

##### Arrays

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

##### Objects

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

##### Re-Usable Types (Interfaces)

```ts
interface Address {
    houseNumber: number;
    streetName?: string;
}

let ee: Address = { houseNumber: 12 };
```

**Union Types**

```ts
interface HasPhoneNumber {
    name: stirng;
    phone: number;
}

interface HasEmail {
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

##### Functions

**Basics**

```ts
interface HasPhoneNumber {
    name: stirng;
    phone: number;
}
// (to: HasPhoneNumber) - "to" param must match HasPhoneNumber
// : { recipient: string; body: string } - This is the expected return value
const sendTextMessage = (to: HasPhoneNumber): { recipient: string; body: string } => {
    return {
        recipient: `${to.name} <${to.phone}>`,
        // body: 12345, ERROR - body should be a string!
        body: "You're pre-approved for a loan!", // This works as intended
    };
};

sendTextMessage("abc"); // ERROR - "abc" doesn't align with HasPhoneNumber
sendTextMessage({ name: "Nick", phone: "07777777777" }); // ERROR - Phone is expected to be a number
sendTextMessage({ name: "Nick", phone: 07777777777 }); // Works as intended!
```

_Return values can also be inferred_

```ts
const sendTextMessage = (to: HasPhoneNumber) => {
    return {
        recipientName: to.name,
        recipientNumber: to.phone,
        body: "You're pre-qualified for a loan!",
    };
};

// the return value is expected to be { recipientName: string; recipientNumber: number; body: string; }
```

**Function signature overload**

```ts
function contactPeople(method: "email" | "phone", ...people: (HasEmail | HasPhoneNumber)[]): void {
    if (method === "email") {
        (people as HasEmail[]).forEach(sendEmail);
    } else {
        (people as HasPhoneNumber[]).forEach(sendTextMessage);
    }
}
// This works as expected
contactPeople("email", { name: "foo", email: "nick@email.com" });

// This also works as expected
contactPeople("phone", { name: "foo", phone: 12345678 });

// ERROR - This also works, however this is incorrect as email is not compatible with phone number.
contactPeople("email", { name: "foo", phone: 12345678 });
```

_Resolution - Create function signatures to show valid ways to access function_

```ts
function contactPeople(method: "email", ...people: HasEmail[]): void; // When email is passed, you MUST provide list of people with email addresses
function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void; // When phone is passed, you MUST provide list of people with phone numbers

function contactPeople(method: "email" | "phone", ...people: (HasEmail | HasPhoneNumber)[]): void {
    if (method === "email") {
        (people as HasEmail[]).forEach(sendEmail);
    } else {
        (people as HasPhoneNumber[]).forEach(sendTextMessage);
    }
}

// contactPeople(method: "email", ...people: HasEmail[]): void
// contactPeople(method: "phone", ...people: HasPhoneNumber[]): void

contactPeople("email", { name: "foo", phone: 12345678 }); // This will now error as email is not assignable to "phone" param
```

##### Interfaces and Type Aliases

**Type Alias**

```ts
type StringOrNumber = string | number;

let a: StringOrNumber = 1;
// is the same as
let a: string | number = 1;
```

**Interfaces**

```ts
export interface HasPhoneNumber {
    name: stirng;
    phone: number;
}

export interface HasInternationalPhoneNumber extends HasPhoneNumber {
    countryCode: string;
}

const x = (to): HasInternationalPhoneNumber => {
    return { name: to.name, phone: to.phone, countryCode: 44 }; // ERROR - countryCode is not a string
    return { name: to.name, phone: to.phone, countryCode: "44" }; // This works as expected!
};
```

**Interface/Type call signatures**

```ts
interface ContactMessenger1 {
    (contact: HasEmail | HasPhoneNumber, message: string): void;
}

type ContactMessenger2 = (contact: HasEmail | HasPhoneNumber, message: string) => void;
```

**Dictionary Objects & Index Signatures**

```ts
interface PhoneNumberDict {
    [numberName: string]: {
        areaCode: number;
        num: number;
    };
}

const p: PhoneNumberDict = {};
p.abc; // BAD! Even though p.abc doesn't exist, it's still acting like it does.
```

_solution_

```ts
interface PhoneNumberDict {
    [numberName: string]:
        | undefined
        | {
              areaCode: number;
              num: number;
          };
}

const p: PhoneNumberDict = {};
// if (p.abc) {
// or
if (typeof p.abc === "object") {
    p.abc; // GOOD - This forces us to check for the existence of abc.
}
```

```ts
const phoneDict: PhoneNumberDict = {
    office: { areaCode: 321, num: 5551212 },
    home: { areaCode: 321, num: 5550010 },
};
```

**Combining Interfaces**

```ts
interface PhoneNumberDict {
    [numberName: string]:
        | undefined
        | {
              areaCode: number;
              num: number;
          };
}

interface PhoneNumberDict {
    home: {
        areaCode: number;
        num: number;
    };
    office: {
        areaCode: number;
        num: number;
    };
}

// ERROR: This is now expecting both a home AND an office properties
const phoneDict: PhoneNumberDict = {
    office: { areaCode: 321, num: 5551212 },
};

// GOOD: This works due to the original interface accepting a key/value pair (index signature)
const phoneDict: PhoneNumberDict = {
    office: { areaCode: 321, num: 5551212 },
    home: { areaCode: 321, num: 5550010 },
    parent: { areaCode: 321, num: 5550011 },
};

phoneDict.office; // Definitely present
phoneDict.home; // Definitely present
phoneDict.parent; // MAYBE present
```

##### Testing Types

See: https://github.com/microsoft/dtslint

##### Classes

```ts
export class Contact implements HasEmail {
    email: string;
    name: string;
    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}

// The same, but cleaner

class ParamPropContact implements HasEmail {
    constructor(public name: string, public email: string = "no email") {
        // nothing needed
    }
}

// public, protected, private and readonly
class ParamPropContact implements HasEmail {
    constructor(public name: string, private email: string = "no email") {
        // nothing needed
    }
}

const x = new ParamPropContact("a", "b");
x.name; // Available
x.email; // NOT Available
```

**Definite Assignment**

```ts
private password!: string; // !: Telling TypeScript to trust you and to not throw warnings
```

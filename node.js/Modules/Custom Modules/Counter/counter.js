// const name = require("./customModule");          // Imports "Nick" from customModule.js
// console.log(name);

const counter = require("./counterModule");

counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.dec();
counter.dec();

console.log(counter.getCount());

const { inc, dec, getCount } = require("./counterModule");

inc();
inc();
inc();
dec();

console.log(getCount());

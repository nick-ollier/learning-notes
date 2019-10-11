// https://nodejs.org/api/fs.html

const fs = require('fs');

console.log("Started Reading Files");
const files = fs.readdirSync('./Assets');                               // Synchronous
console.log("Probably Still Reading Files");
console.log(files);

console.log("\n  *************  \n");

console.log("Started Reading Files");
fs.readdir('./Assets', (err, files) => {                                // Callback runs Asynchronously 

    if (err) {
        throw err;
    }

    console.log(files);
    console.log("Actually Finished Reading Files");
});
console.log("Still Reading Files");
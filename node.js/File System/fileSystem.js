// https://nodejs.org/api/fs.html

const fs = require('fs');

const text = fs.readFileSync("./Assets/keep.md", "UTF-8");

console.log(text);

// fs.readFile("./Assets/keep.md", "UTF-8", (err, text) => {
fs.readFile("./Assets/keep.emde", "UTF-8", (err, text) => {

    if (err) {
        // throw err;
        console.log(`An error has occurred: ${err.message}`);
        process.exit();
    }

    console.log("File Contents:");
    console.log(text);
});
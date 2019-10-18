// https://nodejs.org/api/globals.html

// Command: node global (.js file extension is assumed)

console.log(__dirname);                                         // Outputs directory path
console.log(__filename);                                        // Outputs directory path & file name


const path = require("path");                                   // Built into Node.js

console.log(`Filename: ${path.basename(__filename)}`);          // Outputs file name only
const fs = require('fs');

const md = `
# New File

### Some Heading

Here's some text too!

`;

fs.writeFile('./Assets/coolFile.md', md.trim(), err => {
    if (err) {
        throw err;
    }

    console.log("coolFile Saved!");
});
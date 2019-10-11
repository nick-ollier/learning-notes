const fs = require('fs');

fs.renameSync('./Assets/colors.json', './Assets/colorData.json');                // Renames colours.json to colorData.json

fs.rename('./Assets/keep.md', './Storage/keep.md', err => {                      // Moves keep.md from ./Assets to ./Storage
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync('./Assets/coolFile.md');                                      // Deletes file
}, 4000)
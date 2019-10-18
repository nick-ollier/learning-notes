const fs = require('fs');

// fs.renameSync('./Storage', './storage');
fs.renameSync('./storage', './Storage');

// fs.mkdir('Hello', err => {
//     if (err) {
//         throw err;
//     }

//     console.log("Hello Directory Added")
// });

// fs.rmdir('Hello', err => {
//     if (err) {
//         throw err;
//     }

//     console.log("Hello Directory Removed")
// });

fs.readdirSync('./Storage').forEach(fileName => {            // readdirSync returns an array of contents within the folder
    fs.unlinkSync(`./Storage/${fileName}`);                 // This will remove all files within the storage directory (And the below will work as expected)
})


fs.rmdir('./Storage', err => {
    if (err) {
        throw err;                                          // This will error as the Storage Directory is not empty
    }

    console.log("Storage Directory Removed")
});
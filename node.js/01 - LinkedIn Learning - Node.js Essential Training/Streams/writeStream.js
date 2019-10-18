const fs = require('fs');

const writeStream = fs.createWriteStream("./Assets/newFile.txt", "UTF-8");
const readStream = fs.createReadStream("./lorum-ipsum.md");

// writeStream.write("Hello");
// writeStream.write(" World \n");

// process.stdin.on("data", data => {
//     writeStream.write(data);
// })

// readStream.on("data", data => {
//     writeStream.write(data);
// });

// process.stdin.pipe(writeStream);

readStream.pipe(writeStream);
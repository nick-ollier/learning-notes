// Child Process
// https://nodejs.org/api/child_process.html

const cp = require('child_process');

cp.exec("start http://www.google.com");

cp.exec("start http://maps.google.com", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
})

cp.exec("open http://www.google.com", (err, data, stderr) => {
    console.log(stderr);
})

cp.exec("node readStream", (err, data) => {
    if (err) {
        throw err;
    }

    console.log(data);
})
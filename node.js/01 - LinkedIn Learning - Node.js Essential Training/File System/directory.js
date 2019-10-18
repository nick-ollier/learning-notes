const fs = require('fs');

if (fs.existsSync("Storage")) {
    console.log("Directory Already Exists");
} else {
    fs.mkdir("Storage", err => {
        if (err) {
            throw err;
        }

        console.log("Created Directory");
    });
}


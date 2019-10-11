const fs = require('fs');
const colorData = require('./Assets/colors.json');

colorData.colorList.forEach(c => {
    fs.appendFile('./Storage/colors.md', `${c.color}: ${c.hex} \n`, err => {                // Append will append every time, it won't replace.
        if (err) {
            throw err;
        }
    });
});

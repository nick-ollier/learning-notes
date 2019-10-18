const cp = require('child_process');

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Nick \n");
questionApp.stdin.write("UK \n");
questionApp.stdin.write("Stuff \n");

questionApp.stdout.on("data", data => {
    console.log(`Question App: ${data}`);
});

questionApp.on("close", () => {
    console.log(`Question App Closed!`);
})
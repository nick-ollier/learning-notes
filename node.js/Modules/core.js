// Core Modules 
// https://nodejs.org/api/

// Path
// https://nodejs.org/api/path.html

const path = require('path');

const uploadsDirectory = path.join(__dirname, 'www', 'files', 'uploads');           // Path of core.js / www / files / uploads

console.log(uploadsDirectory);                                                      // Full path to uploads folder directory


// Util
// https://nodejs.org/api/util.html

const util = require('util');
const { log } = require('util');                                                    // Destructured import.

util.log(path.basename(__filename));                                              // Logs with time and date
util.log(' ^ The name of the current file');

log(path.basename(__filename));
log(' ^ The name of the current file');


// V8 (Need to look into this a bit more)
// https://nodejs.org/api/v8.html

const v8 = require('v8');                                                           // Provides information about heap memory through different methods

util.log(v8.getHeapStatistics());                                                 // Returns statistics about heap such as total heap size, used heap size, heap size limit, total available size etc.


// Readline (Conflicts with Events)
// https://nodejs.org/api/readline.html
/** 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How are you? ', answer => {                                            // First param is input - Second param is output
    console.log(`You are: ${answer}`);
});
*/

// Events (Conflicts with Readline)
// https://nodejs.org/api/events.html

const events = require('events');                                                   // Events are asynchronous

const emitter = new events.EventEmitter();                                          // EventEmitter is used to create custom events

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
})

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "Cool!", "Nick")

process.stdin.on("data", data => {
    const input = data.toString().trim();

    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "process")
        process.exit();
    }

    emitter.emit("customEvent", input, "terminal");
})

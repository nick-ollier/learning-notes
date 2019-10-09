console.log(process.pid);                               // Outputs process ID
console.log(process.versions.node);                     // Outputs current version of node
console.log(process.argv);                              // Outputs process argument variables 
                                                        //  argv: Array that contains everything typed to run the process
                                                        //      node globalProcess
                                                        //          [0] full path to node.exe
                                                        //          [1] full path to module passed
                                                        //      node globalProcess Nick Is Cool
                                                        //          [0] full path to node.exe
                                                        //          [1] full path to module passed
                                                        //          [2] "Nick"
                                                        //          [3] "Is"
                                                        //          [4] "Cool"



const [, , firstName, lastName] = process.argv;         // node globalProcess Nick Ollier   
console.log(`My name is ${firstName} ${lastName}`);     // Outputs My name is Nick Ollier             


                                                        // Flags: node globalProcess --niceMessage "You're a fool!" --pleasantGreeting OI!
                                                        //  Quotes wrap the greeting as without it would create sepearate values in the argv array

const grab = flag => {                                  // "Grabbing" in this way allows flags to be passed and used in any order
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--pleasantGreeting");            // Returns OI!
const message = grab("--niceMessage");                  // Returns You're a fool!

console.log(`${greeting} ${message}`);                  // Outputs "OI! You're a fool!""

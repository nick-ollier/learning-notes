// Set Timeout
const waitTime = 5000;

console.log(`Setting a ${waitTime / 1000} second delay`);

// const timerFinished = () => console.log("Done");

// setTimeout(timerFinished, waitTime);


// Set Interval
const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
    currentTime += waitInterval;
    const percentage = Math.floor((currentTime / waitTime) * 100);
    // console.log(`You've been waiting ${currentTime / 1000} seconds`);
    process.stdout.clearLine();                                                 // Clears previous line
    process.stdout.cursorTo(0);                                                 // Moves cursor to the start of the line
    process.stdout.write(`waiting ... ${percentage}% `)
}

// setInterval(incrementTime, waitInterval);


// Clear Interval (Commented out conflicts above)
const myInterval = setInterval(incrementTime, waitInterval);

const timerFinished = () => {
    clearInterval(myInterval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done");
};

setTimeout(timerFinished, waitTime);

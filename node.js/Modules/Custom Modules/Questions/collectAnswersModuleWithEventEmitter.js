const readline = require("readline");
const { EventEmitter } = require('events');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, complete = f => f) => {                        // complete = f => f - Makes second param optional by passing dummy function
    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter();

    const questionAnswer = answer => {
        emitter.emit("answer", answer);

        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswer);
        } else {
            emitter.emit("complete", answers);
            complete(answers);
        }
    };

    rl.question(firstQuestion, questionAnswer);

    return emitter;
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "Who is your daddy? ",
    "And what does he do? "
];

const collectAnswers = (questions, complete) => {
    const answers = [];
    const [ firstQuestion ] = questions;

    const questionAnswer = answer => {
        answers.push(answer);
        if ( answers.length < questions.length ) {
            rl.question(questions[answers.length], questionAnswer);
        } else {
            complete(answers);
        }
    };

    rl.question(firstQuestion, questionAnswer);

};

collectAnswers(questions, answers => {
    console.log("Thank you for your answers:");
    console.log(answers);
    process.exit();
});
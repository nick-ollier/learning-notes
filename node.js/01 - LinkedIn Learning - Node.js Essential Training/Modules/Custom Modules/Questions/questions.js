// const collectAnswers = require("./collectAnswersModule");
const collectAnswers = require("./collectAnswersModuleWithEventEmitter");

const questions = ["Who is your daddy? ", "And what does he do? "];

// collectAnswers(questions, answers => {
//     console.log("Thank you for your answers:");
//     console.log(answers);
//     process.exit();
// });

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`Answer: ${answer}`));

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers:");
    console.log(answers);
})

answerEvents.on("complete", () => {
    process.exit();
});
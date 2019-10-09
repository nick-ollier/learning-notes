                                                                        // process.stdin = Standard Input
                                                                        // process.stdout = Standard Output

process.stdout.write("Hello ");                                         // node questions
process.stdout.write("World \n\n\n");                                   // Output Hello World (3x new line)

const questions = [
    "Who is your daddy?",
    "And what does he do?",
    "Have you ever had a dream that, that you, um, you had, you'd, you would, you could, you'd do, you would, you want, you, you could do so, you, you'd do, you could, you, you want, you want him to do you so much you could do anything?",
    "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
]

const ask = (i = 0) => {
    process.stdout.write(`\n\n ${questions[i]}`); 
    process.stdout.write(` > `); 
}

ask();                                                                  // Outputs "Who is your daddy?"
                                                                        // Default as i = 0 in ask function.
                                                                        // Then exits
/** 
 * 
 * Commented this block out due to conflicts with below.
 * 
  process.stdin.on("data", data => {                                    // Listens for event
                                                                            // Event type is "Data" which means user has typed something and pressed enter.
 
      process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);      // Outputs terminal input 
                                                                        // Keeps listening for input until closed - Exist is required.
      process.exit();                                                   // Stops terminal from listening for new inputs
  });   
 *             
 */                               


const answers = [];                                                     // Creates empty answers array

process.stdin.on("data", data => {                                      // Listens for event
                                                                            // Event type is "Data" which means user has typed something and pressed enter.

    answers.push(data.toString().trim());                               // Pushes answers into array and trims white space

    if (answers.length < questions.length) {                            // if Answers Array is less than Questions Array
        ask(answers.length)                                                 // Ask the first/next question
                                                                            // This will keep running until both arrays are the same length
    } else {
        process.exit();                                                 // Then else gets hit and process exits.
    }
});  

process.on('exit', () => {                                              // Listens for exit, and then runs callback
    const [daddyName, daddyDo, answerThree, answerFour] = answers;

    console.log(` 
    
        Thank you for your answers

        Your Daddy is ${daddyName}, and he is a ${daddyDo}!

        Have you?! ${answerThree}

        Has Anyone?! ${answerFour}
    
    `);                                                                 // Template strings honour white space
});
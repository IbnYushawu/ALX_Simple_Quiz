// 1. Function Declaration
/* function checkAnswer() {
    // 2. Identify the Correct Answer
    let correctAnswer = "4";

    // 3. Retrieve the User’s Answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // 4. Compare Answers & Give Feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// 5. Add Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
*/
function checkAnswer() {
    const correctAnswer = "4";

    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);

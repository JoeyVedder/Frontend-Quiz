const correctAnswers = {
  q1: "A", q2: "B", q3: "A", q4: "B", q5: "A", 
  q6: "D", q7: "B", q8: "C", q9: "A", q10: "A",
  q11: "B", q12: "B", q13: "C", q14: "A", q15: "A", 
  q16: "C", q17: "B", q18: "B", q19: "B", q20: "A", 
  q21: "A", q22: "C",
  debug1: "let x = 10;\nconsole.log(x);",
  debug2: "const name = 'Marshall';\nconsole.log('Hello, ' + name);"
};

const totalQuestions = 24;

function submitQuiz() {
  const form = document.getElementById("quizForm");
  if (!form) {
      console.error("Form not found");
      return;
  }

  let score = 0;
  let incorrectAnswers = [];

  // Check answers for standard questions
  for (let i = 1; i <= totalQuestions; i++) {
      const question = `q${i}`;
      if (form[question].value === correctAnswers[question]) {
          score++;
      } else {
          incorrectAnswers.push(question);
      }
  }

  // Check debugging answers
  checkDebugAnswers();

  const percentage = (score / totalQuestions) * 100; 
  const resultDiv = document.getElementById("result");

  if (score >= 21) { // Minimum score to pass is 21 out of 24
      resultDiv.innerHTML = `Congratulations! You passed with a score of ${percentage.toFixed(2)}%.`;
      showConfetti();
  } else {
      resultDiv.innerHTML = `Better luck next time! Your score is ${percentage.toFixed(2)}%. Incorrect answers: ${incorrectAnswers.join(", ")}`;
  }
}

function checkDebugAnswers() {
  let debugScore = 0;
  let incorrectDebugAnswers = [];

  for (let i = 1; i <= 2; i++) {
      const debugCode = document.getElementById(`debugCode${i}`).value.trim();
      if (debugCode === correctAnswers[`debug${i}`]) {
          debugScore++;
      } else {
          incorrectDebugAnswers.push(`debug${i}`);
      }
  }

  return { debugScore, incorrectDebugAnswers };
}

function checkDebug(number) {
  const code = document.getElementById(`debugCode${number}`).value.trim();
  const correctCode = correctAnswers[`debug${number}`];

  document.getElementById(`debugResult${number}`).innerText = code === correctCode ? "Correct!!" : "Try again.";
}

function showConfetti() {
  confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
  });
}

setTimeout(() => {
  confetti({
      particleCount: 75,
      spread: 120,
      origin: { y: 0.7 }
  });
}, 250);

setTimeout(() => {
  confetti({
      particleCount: 50,
      spread: 100,
      origin: { y: 0.8 }
  });
}, 500);

// Toggle dark mode
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode"); 

    // Optionally change the button text
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
});

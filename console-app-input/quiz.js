const prompt = require("prompt-sync")(); // טעינת הספרייה

// שאלות ותשובות
const quiz = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What year is it?", answer: "2025" }
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
  const userAnswer = prompt(quiz[i].question);

  // בדיקה אם התשובה נכונה (לא משנה אותיות גדולות/קטנות)
  if (userAnswer.trim().toLowerCase() === quiz[i].answer.toLowerCase()) {
    console.log("✅ Correct!\n");
    score++;
  } else {
    console.log("❌ Wrong! The correct answer is: " + quiz[i].answer + "\n");
  }
}

console.log("Final Score: " + score + "/" + quiz.length + " correct!");

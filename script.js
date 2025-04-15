// Hardcoded credentials
const USERNAME = "admin";
const PASSWORD = "12345";

// Login function
function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  if (u === USERNAME && p === PASSWORD) {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");
    showQuestion();
  } else {
    error.textContent = "Invalid username or password.";
  }
}

// ------------------ QUIZ CODE ------------------

const questions = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Hot Mail", "How To Make Lasagna"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "React", "Angular"],
    answer: 0
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS"],
    answer: 0
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascade style sheets", "Colorful style sheet", "Computer style sheet"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(index);
    li.appendChild(btn);
    optionsEl.appendChild(li);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) score++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

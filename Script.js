
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: 1
  },
  {
    question: "Which is used to add interactivity to a website?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("quiz-section").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(i);
    optionsList.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-box").innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
  }
}

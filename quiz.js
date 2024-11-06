const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Madrid"],
        answer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Tolstoy", "Hemingway", "Twain"],
        answer: 0
    },
    {
        question: "What is the boiling point of water?",
        options: ["50°C", "75°C", "100°C", "125°C"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const progressText = document.getElementById("progress");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const totalQuestionsText = document.getElementById("total-questions");
const currentQuestionText = document.getElementById("current-question");

totalQuestionsText.textContent = questions.length;

function loadQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    optionButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.classList.remove("selected");
    });
    currentQuestionText.textContent = currentQuestion + 1;
}

function selectOption(index) {
    optionButtons.forEach(button => button.classList.remove("selected"));
    optionButtons[index].classList.add("selected");
    optionButtons[index].dataset.selected = true;
}

function nextQuestion() {
    const selectedOption = [...optionButtons].find(button => button.classList.contains("selected"));
    if (selectedOption) {
        const answerIndex = questions[currentQuestion].answer;
        if (selectedOption.textContent === questions[currentQuestion].options[answerIndex]) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an option before proceeding.");
    }
}

function showResult() {
    questionEl.classList.add("hidden");
    optionButtons.forEach(button => button.classList.add("hidden"));
    nextButton.classList.add("hidden");
    resultText.classList.remove("hidden");
    scoreText.textContent = score;
}

loadQuestion();

const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: 1 // index of the correct answer in the answers array
    },
    {
        question: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Rome"],
        correctAnswer: 2
    }
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    questionElement.innerText = questions[currentQuestion].question;
    answersElement.innerHTML = '';

    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => selectAnswer(index);
        answersElement.appendChild(button);
    });
}

function selectAnswer(index) {
    if (index === questions[currentQuestion].correctAnswer) {
        score++;
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector(".quiz-container").innerHTML = `<h2>Your score: ${score} out of ${questions.length}</h2>`;
}

loadQuestion();
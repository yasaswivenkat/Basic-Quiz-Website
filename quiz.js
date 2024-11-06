// JavaScript for Quiz
const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: 0 },
    { question: "What is the largest planet?", options: ["Mars", "Earth", "Jupiter", "Saturn"], answer: 2 },
    { question: "What is the atomic number of oxygen?", options: ["6", "8", "7", "9"], answer: 1 },
    { question: "Who wrote '1984'?", options: ["George Orwell", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"], answer: 0 },
    { question: "Which element has the chemical symbol 'Fe'?", options: ["Iron", "Gold", "Fluorine", "Lead"], answer: 0 }
];

let currentQuestion = 0;

const questionElement = document.getElementById('question');
const optionsElements = [
    document.getElementById('option1Label'),
    document.getElementById('option2Label'),
    document.getElementById('option3Label'),
    document.getElementById('option4Label')
];
const nextButton = document.getElementById('nextButton');
const questionCountElement = document.getElementById('questionCount');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElements.forEach((optionElement, index) => {
        optionElement.textContent = question.options[index];
        document.getElementById(`option${index + 1}`).checked = false;
    });
    questionCountElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
        currentQuestion = 0; // Reset for demonstration; remove if not needed
        loadQuestion(); // Load first question if repeating
    }
});

loadQuestion();

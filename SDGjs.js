const questions = [
    {
        question: "What does SDG stand for?",
        choices: ["Sustainable Development Goals", "Social Development Group", "Save the Global", "Scientific Development Goals"],
        correct: 0
    },
    {
        question: "How many SDGs are there?",
        choices: ["10", "15", "17", "20"],
        correct: 2
    },
    {
        question: "Which SDG focuses on clean water and sanitation?",
        choices: ["Goal 3", "Goal 6", "Goal 9", "Goal 12"],
        correct: 1
    },
    {
        question: "Which organization launched the SDGs?",
        choices: ["UN", "WHO", "NASA", "IMF"],
        correct: 0
    },
    {
        question: "What year were the SDGs adopted?",
        choices: ["2000", "2010", "2015", "2020"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;


const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const restartButton = document.getElementById("restart-btn");

function showQuestion() {
    let q = questions[currentQuestionIndex];
    questionElement.innerText = q.question;
    choicesElement.innerHTML = "";
    
    q.choices.forEach((choice, index) => {
        let button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("choice-btn");
        button.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(index) {
    let q = questions[currentQuestionIndex];
    let buttons = document.querySelectorAll(".choice-btn");

    if (index === q.correct) {
        buttons[index].classList.add("correct");
        score++; 
    } else {
        buttons[index].classList.add("incorrect");
        buttons[q.correct].classList.add("correct");
    }

    
    buttons.forEach(btn => btn.disabled = true);

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none";  
    resultContainer.style.display = "block";  

    
    scoreElement.innerText = score;
    totalQuestionsElement.innerText = questions.length;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = "block";  
    resultContainer.style.display = "none"; 
    showQuestion();
}


showQuestion();

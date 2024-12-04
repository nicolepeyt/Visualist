setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const   questions = [
  // 1
  {
    question: "What does panning involve in videography?",
    options: [
      "Moving the camera up and down",
      "Zooming in on a subject",
      "Shifting the camera horizontally while staying in the same position",
      "Tilting the camera to one side"
    ],
    answer: 2,
  },
  // 2
  {
    question: "What emotional effect can an upward tilt of the camera create?",
    options: [
      "It emphasizes weakness and vulnerability",
      "It conveys authority and grandeur",
      "It creates a sense of unease",
      "It diminishes the subject's significance"
    ],
    answer: 1,
  },
  // 3
  {
    question: "Which focusing method provides the most creative control in videography?",
    options: [
      "Automatic focus",
      "Manual focus",
      "Digital stabilization",
      "Pre-set modes"
    ],
    answer: 1,
  },
  // 4
  {
    question: "How does zooming differ from moving the camera physically?",
    options: [
      "It changes the framing by moving closer or farther from the subject without relocating the camera",
      "It always creates a natural and immersive effect",
      "It is less dramatic than using a dolly shot",
      "It is more stable than handheld techniques"
    ],
    answer: 0,
  },
  // 5
  {
    question: "What is an establishing shot used for?",
    options: [
      "Capturing a character's emotional expressions",
      "Providing detailed close-ups of objects",
      "Setting the context of a scene by showing the environment",
      "Transitioning between two different scenes"
    ],
    answer: 2,
  },
  // 6
  {
    question: "Which shot frames a subject from the waist up, often used for dialogue?",
    options: [
      "Wide shot",
      "Medium shot",
      "Close-up shot",
      "Extreme close-up"
    ],
    answer: 1,
  },
  // 7
  {
    question: "What is the purpose of a cutaway shot?",
    options: [
      "To emphasize a specific part of the subject",
      "To temporarily shift focus to related details for context",
      "To capture the main action",
      "To zoom in on a character's face"
    ],
    answer: 1,
  },
  // 8
  {
    question: "What is the defining feature of an extreme close-up?",
    options: [
      "It frames the subject from head to toe",
      "It focuses on a specific detail, like an eye or a small object",
      "It captures the subject’s full environment",
      "It balances subject and background equally"
    ],
    answer: 1,
  },
  // 9
  {
    question: "Which shot best highlights the spatial relationship between a subject and their surroundings?",
    options: [
      "Wide shot",
      "Close-up shot",
      "Medium shot",
      "Cutaway"
    ],
    answer: 0,
  },
  // 10
  {
    question: "What tip helps achieve smoother handheld footage?",
    options: [
      "Always zoom in while shooting handheld",
      "Use the camera’s stabilization feature and keep it at the widest angle",
      "Avoid using stabilization features",
      "Rely solely on post-production corrections"
    ],
    answer: 1,
  },
];


let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.textContent = questions[currentQuestionIndex].question;

  // Load options
  questions[currentQuestionIndex].options.forEach((option, index) => {
    const optionElement = document.getElementById(`option-${index}`);
    const optionText = document.getElementById(`option-text-${index}`);
    optionText.textContent = option;
    optionElement.onclick = () => handleAnswer(index);
    optionElement.classList.remove("correct", "incorrect"); // Reset styles
    optionElement.style.pointerEvents = "auto"; // Re-enable clicking
  });

  document.getElementById("next-button").style.display = "none"; // Hide Next button initially
}

function handleAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].answer;

  // Highlight correct and incorrect answers
  questions[currentQuestionIndex].options.forEach((_, index) => {
    const optionElement = document.getElementById(`option-${index}`);
    if (index === correctIndex) {
      optionElement.classList.add("correct");
    } else if (index === selectedIndex) {
      optionElement.classList.add("incorrect");
    }
    optionElement.style.pointerEvents = "none"; // Disable further clicks
  });

  // Show Next button
  document.getElementById("next-button").style.display = "block";

  // Update score if correct
  if (selectedIndex === correctIndex) score++;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  // Hide the quiz container and display the results container
  document.getElementById("quiz-container").style.display = "none";
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";

  // Update score and total
  document.getElementById("score").textContent = score;
  document.getElementById("total").textContent = questions.length;
}

function restartQuiz() {
  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;

  // Hide result container and show quiz container
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  // Reload the first question
  loadQuestion();
}

// Load the first question when the page loads
window.onload = loadQuestion;
setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What is one of the key elements required for exceptional mobile photography?",
    options: [
      "Owning the latest smartphone",
      "Understanding composition, lighting, and timing",
      "Using only automatic modes",
      "Posting directly to social media"
    ],
    answer: 1,
  },
  // 2
  {
    question: "What is the main difference between digital zoom and optical zoom in smartphones?",
    options: [
      "Optical zoom reduces image sharpness, while digital zoom enhances it.",
      "Digital zoom enlarges the image but reduces sharpness and clarity.",
      "Optical zoom uses pinch gestures, while digital zoom uses buttons.",
      "Digital zoom creates higher-quality images than optical zoom."
    ],
    answer: 1,
  },
  // 3
  {
    question: "How does the rule of thirds grid assist in photography?",
    options: [
      "It ensures perfect focus on the subject.",
      "It automatically adjusts lighting and filters.",
      "It helps balance composition by guiding the placement of the subject.",
      "It allows the camera to capture wider angles."
    ],
    answer: 2,
  },
  // 4
  {
    question: "When is HDR most useful in mobile photography?",
    options: [
      "When capturing a moving subject",
      "When there is a wide range of brightness in the scene",
      "When shooting selfies with a front-facing camera",
      "When using filters like vintage or black-and-white"
    ],
    answer: 1,
  },
  // 5
  {
    question: "Which smartphone camera feature is designed specifically for portraits?",
    options: [
      "Front camera",
      "Scene mode",
      "Flash",
      "HDR"
    ],
    answer: 1,
  },
  // 6
  {
    question: "Why is natural light often preferred over using the smartphone flash?",
    options: [
      "Flash consumes more battery life.",
      "Natural light produces softer and more flattering portraits.",
      "Smartphone flash is not available on all devices.",
      "Flash is only effective in outdoor settings."
    ],
    answer: 1,
  },
  // 7
  {
    question: "What is a benefit of exploring the filters available on your smartphone camera?",
    options: [
      "Filters automatically improve image sharpness.",
      "Filters enhance creative expression by applying effects like vintage or black-and-white.",
      "Filters adjust the focus automatically.",
      "Filters improve the zoom function for distant objects."
    ],
    answer: 1,
  },
  // 8
  {
    question: "What is a common use of the front-facing camera?",
    options: [
      "Capturing long-distance landscapes",
      "Creating unusual angles or selfies",
      "Using advanced HDR settings",
      "Enhancing sharpness in low light"
    ],
    answer: 1,
  },
  // 9
  {
    question: "Which gesture is commonly used to access the zoom slider on an iPhone?",
    options: [
      "Swiping left",
      "Double-tapping",
      "Pinching the screen",
      "Pressing the volume buttons"
    ],
    answer: 2,
  },
  // 10
  {
    question: "What is one challenge the smartphone digital zoom faces compared to optical zoom?",
    options: [
      "It requires additional lenses.",
      "It often reduces sharpness and clarity.",
      "It only works in HDR mode.",
      "It cannot be adjusted manually."
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
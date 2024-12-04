setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What is natural light in photography?",
    options: [
      "Light produced by studio equipment",
      "Light created by the sun or moon",
      "Light generated using LED panels",
      "Light filtered through colored gels"
    ],
    answer: 1,
  },
  // 2
  {
    question: "What is the 'golden hour'?",
    options: [
      "The time when the sun is at its peak",
      "The period shortly after sunrise and before sunset",
      "The middle of the day",
      "The brief moment right after sunset"
    ],
    answer: 1,
  },
  // 3
  {
    question: "Which type of light is best for minimizing harsh shadows?",
    options: [
      "Golden light",
      "High contrast light",
      "Soft light",
      "Direct midday light"
    ],
    answer: 2,
  },
  // 4
  {
    question: "What is the main challenge of shooting during high noon?",
    options: [
      "The lighting creates a warm, even glow",
      "The lighting emphasizes shadows and reduces depth",
      "The lighting is too soft and diffused",
      "The lighting makes reflective surfaces dull"
    ],
    answer: 1,
  },
  // 5
  {
    question: "When does the 'blue hour' occur?",
    options: [
      "At midday when the sky is clear",
      "Before sunrise and after sunset",
      "Shortly after noon",
      "During the golden hour"
    ],
    answer: 1,
  },
  // 6
  {
    question: "What type of lighting is typically seen on cloudy days?",
    options: [
      "Hard and direct light",
      "Diffused and soft light",
      "Warm and golden light",
      "High-contrast light"
    ],
    answer: 1,
  },
  // 7
  {
    question: "Which time of day is ideal for capturing dramatic, artistic effects in photography?",
    options: [
      "Early afternoon",
      "Golden hour",
      "High noon",
      "Late night"
    ],
    answer: 1,
  },
  // 8
  {
    question: "What does contrast in photography refer to?",
    options: [
      "The arrangement of colors in an image",
      "The difference between two or more elements, like light and dark",
      "The type of lens used for capturing photos",
      "The sharpness of the image"
    ],
    answer: 1,
  },
  // 9
  {
    question: "What technique is often required for night photography?",
    options: [
      "Short exposures",
      "Using only natural light",
      "Long exposures",
      "Avoiding artificial light sources"
    ],
    answer: 2,
  },
  // 10
  {
    question: "Why is soft light preferable for portraits?",
    options: [
      "It eliminates shadows completely",
      "It creates a serene and flattering effect",
      "It enhances contrast and saturation",
      "It works best only on sunny days"
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
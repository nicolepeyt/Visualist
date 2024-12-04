setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What does photography and videography equipment primarily help with?",
    options: [
      "Capturing, enhancing, and refining visual and audio content",
      "Replacing creative ideas with automated processes",
      "Eliminating the need for storytelling",
      "Avoiding technical challenges"
    ],
    answer: 0,
  },
  // 2
  {
    question: "Why is equipment important in filmmaking?",
    options: [
      "It ensures faster project completion regardless of quality.",
      "It brings stories to life with high-quality visuals and clear audio.",
      "It completely eliminates the need for creativity.",
      "It limits experimentation with angles and lighting."
    ],
    answer: 1,
  },
  // 3
  {
    question: "Which of these tools provides stable shots for smartphone photography?",
    options: [
      "Handheld microphone",
      "Joby GorillaPod tripod",
      "Reflector panel",
      "Ring light"
    ],
    answer: 1,
  },
  // 4
  {
    question: "What is the purpose of a gimbal in videography?",
    options: [
      "To capture audio",
      "To smooth out cinematic movements",
      "To add artificial lighting",
      "To reduce shadows in photos"
    ],
    answer: 1,
  },
  // 5
  {
    question: "Why is natural light considered a cost-effective 'equipment' in videography?",
    options: [
      "It eliminates the need for any other gear.",
      "It provides high-quality illumination for free.",
      "It can only be used during daytime shoots.",
      "It replaces all lighting accessories entirely."
    ],
    answer: 1,
  },
  // 6
  {
    question: "A _________ is an all-in-one tool for capturing, editing, and managing visual content.",
    options: [
      "Microphone",
      "Smartphone",
      "Tripod",
      "Stabilizer"
    ],
    answer: 1,
  },
  // 7
  {
    question: "For reducing background noise in interviews, filmmakers commonly use ________ microphones.",
    options: [
      "Smartphone-built",
      "Lavalier",
      "Reflector",
      "Boom"
    ],
    answer: 1,
  },
  // 8
  {
    question: "To stabilize shots without professional tools, you can use a ________ or handheld grip.",
    options: [
      "DIY stabilizer",
      "Lighting stand",
      "Shotgun microphone",
      "Editing software"
    ],
    answer: 0,
  },
  // 9
  {
    question: "The ________ hours offer the best natural lighting conditions for videography.",
    options: [
      "Morning",
      "Golden",
      "Afternoon",
      "Twilight"
    ],
    answer: 1,
  },
  // 10
  {
    question: "Reflectors like whiteboards or foil can enhance ________, creating a cost-effective way to improve visuals.",
    options: [
      "Artificial lighting",
      "Natural light",
      "Audio quality",
      "Camera angles"
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
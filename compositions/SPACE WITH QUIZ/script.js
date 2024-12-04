setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What is space composition in photography?",
    options: [
      "Arranging space in a photo to balance positive and negative space",
      "Filling the entire frame with the subject",
      "Avoiding the use of negative space",
      "Using only bright backgrounds"
    ],
    answer: 0,
  },
  // 2
  {
    question: "Why is space composition important in photography?",
    options: [
      "It makes images crowded and full of details",
      "It balances the subject and empty space for better focus and depth",
      "It eliminates the need for backgrounds",
      "It ensures the subject is always in the center of the frame"
    ],
    answer: 1,
  },
  // 3
  {
    question: "What does negative space represent in photography?",
    options: [
      "The main subject of the photo",
      "Empty areas around the subject",
      "Overcrowded elements",
      "Only dark or shadowy parts"
    ],
    answer: 1,
  },
  // 4
  {
    question: "What happens if space composition is missing in a photo?",
    options: [
      "The image looks balanced",
      "The subject blends well with the negative space",
      "The frame feels crowded and lacks direction",
      "The viewer’s focus is enhanced"
    ],
    answer: 2,
  },
  // 5
  {
    question: "How does space composition improve storytelling in photography?",
    options: [
      "By filling the frame completely",
      "By emphasizing only the background",
      "By guiding the viewer’s eye to key elements",
      "By adding multiple subjects"
    ],
    answer: 2,
  },
  // 6
  {
    question: "What is the effect of large negative spaces in a photograph?",
    options: [
      "Creates a sense of peace or loneliness",
      "Makes the image feel overcrowded",
      "Highlights only the background details",
      "Creates tension or excitement"
    ],
    answer: 0,
  },
  // 7
  {
    question: "Which technique helps add depth to a photo?",
    options: [
      "Using the rule of thirds",
      "Including elements in the foreground, middle ground, and background",
      "Centering the subject in the frame",
      "Removing all negative space"
    ],
    answer: 1,
  },
  // 8
  {
    question: "How can space composition suggest movement or direction in action shots?",
    options: [
      "By placing the subject in the middle of the frame",
      "By leaving room in the frame where the subject is heading or looking",
      "By avoiding negative space entirely",
      "By focusing only on the subject’s face"
    ],
    answer: 1,
  },
  // 9
  {
    question: "In the 'With Space Composition' example, how is the subject positioned?",
    options: [
      "Filling the entire frame",
      "With ample negative space to create balance and suggest movement",
      "In the background only",
      "Crowded with other elements"
    ],
    answer: 1,
  },
  // 10
  {
    question: "What is a simple way to practice using space composition?",
    options: [
      "Place a subject against a busy background",
      "Focus only on the middle ground",
      "Use a plain background and leave empty space around the subject",
      "Eliminate all negative space"
    ],
    answer: 2,
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
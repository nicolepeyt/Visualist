setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What is frame composition in photography?",
    options: [
      "Using color filters to enhance images",
      "Positioning elements to surround the subject and draw attention to it",
      "Aligning the subject at the center of the frame",
      "Cropping the photo to remove unnecessary elements"
    ],
    answer: 1,
  },
  // 2
  {
    question: "Which of the following is an example of a natural frame?",
    options: [
      "A tree arching over a pathway",
      "A wooden picture frame",
      "A fence surrounding a garden",
      "A shadow cast on a wall"
    ],
    answer: 0,
  },
  // 3
  {
    question: "What is the primary purpose of framing in photography?",
    options: [
      "To reduce the need for editing",
      "To guide the viewer’s eye to the subject",
      "To create symmetry in the image",
      "To eliminate distracting backgrounds"
    ],
    answer: 1,
  },
  // 4
  {
    question: "Which type of frame uses elements like windows, doors, or fences?",
    options: [
      "Natural frame",
      "Abstract frame",
      "Man-made frame",
      "Layered frame"
    ],
    answer: 2,
  },
  // 5
  {
    question: "Abstract frames often include which of the following elements?",
    options: [
      "Shadows, reflections, or blurred foreground objects",
      "Trees, arches, or caves",
      "Walls, fences, or gates",
      "Clear skies and open fields"
    ],
    answer: 0,
  },
  // 6
  {
    question: "Which of the following is NOT a benefit of using framing in photography?",
    options: [
      "Adds depth and dimension",
      "Creates layers in the composition",
      "Removes the need for composition skills",
      "Guides the viewer's attention to the subject"
    ],
    answer: 2,
  },
  // 7
  {
    question: "What does a man-made frame often add to the composition?",
    options: [
      "Natural context",
      "Architectural or urban feel",
      "Soft, organic lines",
      "More abstract or surreal elements"
    ],
    answer: 1,
  },
  // 8
  {
    question: "A natural frame can be created by using elements like:",
    options: [
      "Glass reflections",
      "Arches, trees, or caves",
      "Photographic props",
      "Blurred lights"
    ],
    answer: 1,
  },
  // 9
  {
    question: "What is the key difference between natural and man-made frames?",
    options: [
      "Natural frames use elements from the environment, while man-made frames use constructed elements",
      "Man-made frames create more depth, while natural frames do not",
      "Natural frames can only be used for outdoor photos",
      "Man-made frames are more abstract in nature"
    ],
    answer: 0,
  },
  // 10
  {
    question: "Why is framing considered an important technique in visual storytelling?",
    options: [
      "It adds focus and context to the image",
      "It reduces the image size",
      "It enhances the colors of the subject",
      "It eliminates the need for editing the photo"
    ],
    answer: 0,
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
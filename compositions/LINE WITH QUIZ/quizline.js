setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What is the primary role of lines in composition?",
    options: [
      "To add color to the image",
      "To guide the viewer's eye and influence the image's feel",
      "To fill empty space in the frame",
      "To replace other compositional elements"
    ],
    answer: 1,
  },
  // 2
  {
    question: "What are leading lines?",
    options: [
      "Lines that direct the viewer's eye toward a focal point",
      "Lines that form geometric shapes",
      "Lines that do not connect or intersect",
      "Lines that are parallel to the horizon"
    ],
    answer: 0,
  },
  // 3
  {
    question: "Which type of lines creates the illusion of depth and perspective in an image?",
    options: [
      "Horizontal lines",
      "Vertical lines",
      "Converging lines",
      "Curved lines"
    ],
    answer: 2,
  },
  // 4
  {
    question: "How do shapes relate to lines in composition?",
    options: [
      "Shapes are created when one or more lines connect or close.",
      "Shapes are independent of lines in composition.",
      "Lines distract from the importance of shapes.",
      "Shapes and lines serve identical purposes in photography."
    ],
    answer: 0,
  },
  // 5
  {
    question: "What type of shapes is characterized by order, symmetry, and stability?",
    options: [
      "Organic shapes",
      "Abstract shapes",
      "Geometric shapes",
      "Dynamic shapes"
    ],
    answer: 2,
  },
  // 6
  {
    question: "Which of the following is an example of a geometric shape in photography?",
    options: [
      "The curve of a tree branch",
      "A rectangular window",
      "The outline of a cloud",
      "The irregular form of a rock"
    ],
    answer: 1,
  },
  // 7
  {
    question: "What is a key characteristic of organic shapes?",
    options: [
      "They are defined by symmetry and precision.",
      "They are freeform and often irregular.",
      "They are composed only of straight lines.",
      "They are commonly used in urban photography."
    ],
    answer: 1,
  },
  // 8
  {
    question: "Which lines can create a sense of movement in a photograph?",
    options: [
      "Horizontal lines",
      "Curved lines",
      "Geometric lines",
      "Static lines"
    ],
    answer: 1,
  },
  // 9
  {
    question: "Why are leading lines effective in photography?",
    options: [
      "They make the image more colorful.",
      "They draw the viewer's attention to the main subject or focal point.",
      "They keep the viewer's eye outside the frame.",
      "They add randomness to the composition."
    ],
    answer: 1,
  },
  // 10
  {
    question: "What tip is recommended for effectively using lines in photography?",
    options: [
      "Avoid lines that intersect or converge.",
      "Use leading lines to guide the viewer's eye toward the subject.",
      "Always include straight lines for balance.",
      "Avoid relying on lines and focus only on shapes."
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
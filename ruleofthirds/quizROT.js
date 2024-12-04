setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What does the rule of thirds recommend for creating balanced compositions?",
    options: [
      "Centering the subject in every shot",
      "Placing the subject in the left or right third of the frame",
      "Eliminating negative space around the subject",
      "Aligning all elements symmetrically"
    ],
    answer: 1,
  },
  // 2
  {
    question: "How is the rule of thirds grid divided?",
    options: [
      "Into four equal sections",
      "Into nine equal sections with two horizontal and two vertical lines",
      "Into six equal squares",
      "Into eight intersecting lines"
    ],
    answer: 1,
  },
  // 3
  {
    question: "Which feature on most cameras and smartphones makes it easier to use the rule of thirds?",
    options: [
      "Night mode",
      "Zoom function",
      "Grid overlay",
      "Flash settings"
    ],
    answer: 2,
  },
  // 4
  {
    question: "In landscape photography, where should the horizon be placed for a more dynamic composition?",
    options: [
      "Center of the frame",
      "Bottom or top third of the frame",
      "Directly above the subject",
      "Aligned diagonally across the frame"
    ],
    answer: 1,
  },
  // 5
  {
    question: "Why is negative space important when using the rule of thirds?",
    options: [
      "It fills unused areas of the photo.",
      "It creates a sense of openness and balance around the subject.",
      "It emphasizes symmetrical designs.",
      "It eliminates the need for focal points."
    ],
    answer: 1,
  },
  // 6
  {
    question: "To apply the rule of thirds, imagine dividing the frame into a grid with ________ equal sections.",
    options: [
      "Six",
      "Nine",
      "Twelve",
      "Four"
    ],
    answer: 1,
  },
  // 7
  {
    question: "The ________ of the grid are ideal spots to position your subject for a balanced composition.",
    options: [
      "Outer edges",
      "Intersections",
      "Horizontal lines only",
      "Center lines"
    ],
    answer: 1,
  },
  // 8
  {
    question: "In portrait orientation, aligning the subject’s ________ along the grid line often creates a dramatic and balanced effect.",
    options: [
      "Hands",
      "Eyes",
      "Feet",
      "Background"
    ],
    answer: 1,
  },
  // 9
  {
    question: "To enable the grid on an iPhone, you need to turn it on in the ________ app.",
    options: [
      "Camera",
      "Photos",
      "Settings",
      "Grid"
    ],
    answer: 0,
  },
  // 10
  {
    question: "When composing with the rule of thirds, moving around to find the perfect ________ can make your shots more visually striking.",
    options: [
      "Filter",
      "Point of view",
      "Light source",
      "Subject color"
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
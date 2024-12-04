setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  {
    question: "What is videography primarily about?",
    options: [
      "Capturing still images for albums",
      "Capturing and creating moving images to tell stories and share experiences",
      "Editing text for multimedia projects",
      "Designing interactive web pages"
    ],
    answer: 1,
  },
  // 2
  {
    question: "What is the main purpose of videography?",
    options: [
      "To create decorative elements",
      "To preserve and communicate visual and auditory content effectively",
      "To replace traditional photography",
      "To generate sound effects"
    ],
    answer: 1,
  },
  // 3
  {
    question: "Which type of videography focuses on filming events like weddings and concerts?",
    options: [
      "Travel Videography",
      "Event Videography",
      "Corporate Videography",
      "Documentary Videography"
    ],
    answer: 1,
  },
  // 4
  {
    question: "What is the primary goal of real estate videography?",
    options: [
      "Capturing architectural blueprints",
      "Showcasing properties to help viewers imagine living there",
      "Documenting construction progress",
      "Highlighting cityscapes"
    ],
    answer: 1,
  },
  // 5
  {
    question: "What does music videography primarily focus on?",
    options: [
      "Capturing live sports events",
      "Interpreting a song’s emotions and themes through visuals",
      "Recording concerts without any edits",
      "Creating soundtracks for movies"
    ],
    answer: 1,
  },
  // 6
  {
    question: "Which type of videography is about promoting a product or service effectively?",
    options: [
      "Sports Videography",
      "Corporate Videography",
      "Commercial Videography",
      "Travel Videography"
    ],
    answer: 2,
  },
  // 7
  {
    question: "Which videography type often addresses societal issues and human experiences?",
    options: [
      "Documentary Videography",
      "Sports Videography",
      "Event Videography",
      "Commercial Videography"
    ],
    answer: 0,
  },
  // 8
  {
    question: "What does travel videography aim to capture?",
    options: [
      "The essence of places, cultures, and hidden gems",
      "The technical details of landscapes",
      "A catalog of popular tourist attractions",
      "Business-oriented locations"
    ],
    answer: 0,
  },
  // 9
  {
    question: "What type of videography involves filmed conversations highlighting thoughts or expertise?",
    options: [
      "Travel Videography",
      "Interview Videography",
      "Corporate Videography",
      "Sports Videography"
    ],
    answer: 1,
  },
  // 10
  {
    question: "Sports videography aims to capture ________.",
    options: [
      "The energy and excitement of sports events",
      "Strategies for athletes",
      "Still shots of players",
      "Advertisements for sports equipment"
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
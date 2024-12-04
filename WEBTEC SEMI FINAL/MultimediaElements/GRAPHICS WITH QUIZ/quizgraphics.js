setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What are graphics in multimedia?",
    options: [
      "Moving visual elements that replace text",
      "Static visuals like photos, illustrations, and icons that complement text",
      "Sound effects used in multimedia",
      "Videos that convey a message"
    ],
    answer: 1,
  },
  // 2
  {
    question: "Why are graphics important in multimedia?",
    options: [
      "They replace text entirely.",
      "They clarify ideas and enhance engagement.",
      "They make the content complex and hard to follow.",
      "They are only decorative and not functional."
    ],
    answer: 1,
  },
  // 3
  {
    question: "What is the key difference between vector and bitmap graphics?",
    options: [
      "Vector graphics are made of pixels, while bitmaps are made of lines and shapes.",
      "Bitmap graphics are resolution-independent, while vector graphics lose quality when resized.",
      "Vector graphics are resolution-independent and scalable, while bitmap graphics are made of pixels and tied to a specific resolution.",
      "Bitmap graphics use mathematical equations, while vector graphics are grid-based."
    ],
    answer: 2,
  },
  // 4
  {
    question: "When should vector graphics be used?",
    options: [
      "For photographs with fine details",
      "For graphics that need to be resized, like logos and icons",
      "For web animations",
      "For images with gradients and shading"
    ],
    answer: 1,
  },
  // 5
  {
    question: "What is a disadvantage of bitmap graphics?",
    options: [
      "They cannot represent colors accurately.",
      "They lose quality when resized.",
      "They are unsuitable for photographs.",
      "They are not compatible with web formats."
    ],
    answer: 1,
  },
  // 6
  {
    question: "Which file format is ideal for high-quality prints?",
    options: [
      "JPEG",
      "GIF",
      "PNG",
      "TIFF"
    ],
    answer: 3,
  },
  // 7
  {
    question: "Which of these is a characteristic of the JPEG file format?",
    options: [
      "Supports animation",
      "Provides transparency",
      "Offers lossy compression for small file sizes",
      "Uncompressed with large file sizes"
    ],
    answer: 2,
  },
  // 8
  {
    question: "What is the main advantage of PNG over JPEG?",
    options: [
      "PNG supports transparency, while JPEG does not.",
      "PNG files are smaller than JPEG files.",
      "PNG is better for animations.",
      "PNG is suitable for print, while JPEG is not."
    ],
    answer: 0,
  },
  // 9
  {
    question: "Which of the following file formats is rarely used now due to its large size and inefficiency?",
    options: [
      "TIFF",
      "JPEG",
      "BMP",
      "PNG"
    ],
    answer: 2,
  },
  // 10
  {
    question: "What is a key tip for using graphics effectively in multimedia?",
    options: [
      "Use only one type of file format for all projects.",
      "Avoid optimizing graphics for web use.",
      "Choose the right format, balance quality with file size, and test on different devices.",
      "Prioritize aesthetics over accessibility and usability."
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
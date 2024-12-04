setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What role does text play in multimedia?",
    options: [
      "It is only used as a decorative element",
      "It replaces all images and videos",
      "It conveys important information and provides context",
      "It distracts from the visuals"
    ],
    answer: 2,
  },
  // 2
  {
    question: "What are sans-serif fonts typically known for?",
    options: [
      "Their traditional and decorative appearance",
      "Being easier to read on digital screens",
      "Having small lines or “feet” at the ends of letters",
      "Being exclusively used in print materials"
    ],
    answer: 1,
  },
  // 3
  {
    question: "How do serif fonts differ from sans-serif fonts?",
    options: [
      "They are cleaner and modern in appearance",
      "They are used primarily in digital interfaces",
      "They include small decorative lines or 'feet' at the end of strokes",
      "They are harder to read in printed materials"
    ],
    answer: 2,
  },
  // 4
  {
    question: "What is kerning in typography?",
    options: [
      "Adjusting the vertical spacing between lines of text",
      "Adjusting the overall spacing between characters in a block of text",
      "Adjusting the spacing between individual characters",
      "Adding decorative elements to letters"
    ],
    answer: 2,
  },
  // 5
  {
    question: "What does leading refer to in text formatting?",
    options: [
      "The spacing between individual characters",
      "The uniform spacing in a block of text",
      "The vertical spacing between lines of text",
      "The placement of text on a webpage"
    ],
    answer: 2,
  },
  // 6
  {
    question: "How does tracking differ from kerning?",
    options: [
      "Tracking adjusts spacing across an entire block of text, while kerning adjusts space between individual characters",
      "Tracking is only used in titles, while kerning is used in body text",
      "Tracking adds decorative features, while kerning enhances readability",
      "Tracking modifies font size, while kerning modifies font style"
    ],
    answer: 0,
  },
  // 7
  {
    question: "Why is proper line spacing (leading) important in text elements?",
    options: [
      "To fit more text into a design",
      "To create consistent spacing between paragraphs",
      "To ensure text is readable and visually harmonious",
      "To increase the font size automatically"
    ],
    answer: 2,
  },
  // 8
  {
    question: "What is the ideal font size for body text in digital content?",
    options: [
      "12px to 14px",
      "16px to 18px",
      "20px to 22px",
      "24px or larger"
    ],
    answer: 1,
  },
  // 9
  {
    question: "Why is contrast between text and background important?",
    options: [
      "To make the design look more colorful",
      "To improve readability and ensure the text stands out",
      "To highlight the background details",
      "To reduce the use of white space"
    ],
    answer: 1,
  },
  // 10
  {
    question: "Which of the following is a good practice for creating readable text elements?",
    options: [
      "Using long paragraphs without breaks",
      "Ensuring consistency in font choices and sizes",
      "Using light text on a light background",
      "Center-aligning all text in the layout"
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
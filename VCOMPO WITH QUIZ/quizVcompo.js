setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What are the primary components of videography?",
    options: [
      "Camera, lighting, sound, editing software, and stabilizing tools",
      "Graphics, animation, color grading, and text overlays",
      "Scripts, costumes, green screens, and projectors",
      "Monitors, microphones, file storage, and presentation software"
    ],
    answer: 0,
  },
  // 2
  {
    question: "Why is lighting important in videography?",
    options: [
      "To make subjects look artificial",
      "To set the mood and enhance visual clarity",
      "To replace the need for editing",
      "To stabilize the camera"
    ],
    answer: 1,
  },
  // 3
  {
    question: "What does 'framing' in videography refer to?",
    options: [
      "The process of editing scenes",
      "The way subjects and elements are positioned within the video frame",
      "The addition of visual effects",
      "The use of filters for color correction"
    ],
    answer: 1,
  },
  // 4
  {
    question: "What is the rule of thirds?",
    options: [
      "Dividing the frame into three sections vertically",
      "Placing elements along two horizontal and two vertical lines for balanced composition",
      "Using three cameras for simultaneous shooting",
      "Filming three subjects in every scene"
    ],
    answer: 1,
  },
  // 5
  {
    question: "What does proper headroom in videography achieve?",
    options: [
      "Eliminates the need for framing",
      "Creates a natural and balanced composition",
      "Ensures subjects are centered in the frame",
      "Allows more space for background elements"
    ],
    answer: 1,
  },
  // 6
  {
    question: "What is noseroom, or lead room, in videography?",
    options: [
      "The space behind a subject",
      "The area in front of a subject’s face or direction of movement",
      "The distance between the subject and the camera",
      "The space above the subject's head"
    ],
    answer: 1,
  },
  // 7
  {
    question: "What is the function of diagonal lines or the Z-axis in composition?",
    options: [
      "To simplify the frame",
      "To add three-dimensionality and visual energy",
      "To keep the frame static",
      "To remove distractions"
    ],
    answer: 1,
  },
  // 8
  {
    question: "How can camera height affect a subject's perception?",
    options: [
      "It does not influence perception",
      "High angles make the subject appear powerful",
      "Low angles make the subject appear weak",
      "High angles can diminish presence, while low angles convey authority"
    ],
    answer: 3,
  },
  // 9
  {
    question: "What is the purpose of using diverse camera shots in videography?",
    options: [
      "To add complexity to the filming process",
      "To capture scenes with varied perspectives, enhancing storytelling",
      "To reduce the need for editing",
      "To maintain uniformity across shots"
    ],
    answer: 1,
  },
  // 10
  {
    question: "Which tip helps create effective composition in videography?",
    options: [
      "Ignore lighting and focus solely on framing",
      "Use distractions to make shots dynamic",
      "Apply the rule of thirds, maintain proper headroom, and add depth using diagonals",
      "Center every subject for balanced framing"
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
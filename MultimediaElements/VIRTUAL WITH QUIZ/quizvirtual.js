setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What is Virtual Reality (VR) in multimedia?",
    options: [
      "A two-dimensional digital experience",
      "An immersive, interactive three-dimensional environment",
      "A simulation of traditional media formats",
      "A static representation of real-life events"
    ],
    answer: 1,
  },
  // 2
  {
    question: "Which device is essential for experiencing VR?",
    options: [
      "Digital camera",
      "VR headset",
      "Smartphone only",
      "Television"
    ],
    answer: 1,
  },
  // 3
  {
    question: "What is a significant feature of VR compared to traditional media?",
    options: [
      "Static storytelling",
      "Passive engagement",
      "User interactivity and immersion",
      "Text-based explanations"
    ],
    answer: 2,
  },
  // 4
  {
    question: "How is VR used in education?",
    options: [
      "To replace textbooks entirely",
      "To explore virtual environments like historical events or distant locations",
      "To create exams and assessments",
      "To replace classroom discussions"
    ],
    answer: 1,
  },
  // 5
  {
    question: "What is an example of VR in healthcare?",
    options: [
      "Viewing medical charts on a screen",
      "Using virtual simulations for medical training and surgical practice",
      "Conducting therapy sessions via video calls",
      "Writing research papers"
    ],
    answer: 1,
  },
  // 6
  {
    question: "Which field often utilizes VR for creating risk-free practice environments?",
    options: [
      "Film production",
      "Virtual tourism",
      "Training simulations",
      "Marketing and advertising"
    ],
    answer: 2,
  },
  // 7
  {
    question: "What makes VR especially effective for storytelling?",
    options: [
      "Its ability to compress stories into shorter formats",
      "Its passive, observational nature",
      "Its ability to place users within the narrative for firsthand experiences",
      "Its reliance on text descriptions"
    ],
    answer: 2,
  },
  // 8
  {
    question: "In what way does VR enhance virtual tourism?",
    options: [
      "By providing static images of destinations",
      "By allowing users to explore places interactively as if they were there",
      "By offering audio-only tours",
      "By focusing on travel booking systems"
    ],
    answer: 1,
  },
  // 9
  {
    question: "What role does VR play in multimedia?",
    options: [
      "A supplementary feature to enhance audio",
      "A passive media format for storytelling",
      "A tool that offers immersive, interactive digital experiences",
      "A standalone replacement for traditional multimedia"
    ],
    answer: 2,
  },
  // 10
  {
    question: "How is VR expected to evolve in the future?",
    options: [
      "By eliminating the need for other multimedia elements",
      "By making multimedia content more static and rigid",
      "By advancing user interaction and transforming digital experiences",
      "By focusing exclusively on gaming applications"
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
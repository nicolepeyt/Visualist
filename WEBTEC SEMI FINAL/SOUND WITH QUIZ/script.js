setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What are audio elements in multimedia?",
    options: [
      "Graphics and animations",
      "Sound-based components that enhance communication",
      "Video clips and text",
      "Only background music"
    ],
    answer: 1,
  },
  // 2
  {
    question: "Why is audio important in multimedia?",
    options: [
      "It replaces visual elements entirely",
      "It enhances the emotional and immersive experience",
      "It eliminates the need for text",
      "It only provides sound effects"
    ],
    answer: 1,
  },
  // 3
  {
    question: "Which type of audio is used to guide users or tell a story?",
    options: [
      "Sound effects",
      "Background music",
      "Narration",
      "Ambient sounds"
    ],
    answer: 2,
  },
  // 4
  {
    question: "What are sound effects?",
    options: [
      "Background music tracks",
      "Artificially created or enhanced sounds",
      "Only sounds recorded in nature",
      "Real-time audio signals"
    ],
    answer: 1,
  },
  // 5
  {
    question: 'What does "original recordings" refer to?',
    options: [
      "Pre-existing music tracks",
      "Audio content specifically created for a project",
      "Randomized sound bites",
      "Public domain sound clips"
    ],
    answer: 1,
  },
  // 6
  {
    question: "What is the file format best suited for high-quality audio editing?",
    options: [
      "MP3",
      "WAV",
      "OGG",
      "AAC"
    ],
    answer: 1,
  },
  // 7
  {
    question: "What is sampling in audio?",
    options: [
      "The method of playing sounds in reverse",
      "The process of converting analog sound into digital snapshots",
      "Increasing the file size of audio",
      "Mixing different audio tracks"
    ],
    answer: 1,
  },
  // 8
  {
    question: "What does sample size (bit depth) affect in audio?",
    options: [
      "The playback speed",
      "The amount of noise in the recording",
      "The detail and dynamic range of sound",
      "The frequency of sound waves"
    ],
    answer: 2,
  },
  // 9
  {
    question: "What is the standard sample rate for CD-quality audio?",
    options: [
      "22.05 kHz",
      "32 kHz",
      "44.1 kHz",
      "96 kHz"
    ],
    answer: 2,
  },
  // 10
  {
    question: "Which file format is commonly used for archiving high-quality audio?",
    options: [
      "MP3",
      "FLAC",
      "OGG",
      "AIFF"
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
setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What is the primary function of a theme in multimedia?",
    options: [
      "To provide decorative elements",
      "To serve as the underlying concept or idea driving the content",
      "To determine the file format used",
      "To replace the need for interactivity"
    ],
    answer: 1,
  },
  // 2
  {
    question: "Why is a clear theme important in multimedia projects?",
    options: [
      "It helps users focus and understand the content better",
      "It eliminates the need for text elements",
      "It allows for random design choices",
      "It prevents the use of multiple media types"
    ],
    answer: 0,
  },
  // 3
  {
    question: "Which of the following is NOT influenced by the theme in multimedia?",
    options: [
      "Narrative or message",
      "Choice of visuals and audio",
      "File size and resolution",
      "Overall user experience"
    ],
    answer: 2,
  },
  // 4
  {
    question: "How does the theme contribute to brand identity in multimedia?",
    options: [
      "By creating inconsistent design elements",
      "By reinforcing the brand’s core message through consistent visual and audio design",
      "By eliminating the need for brand logos",
      "By ensuring all content is text-heavy"
    ],
    answer: 1,
  },
  // 5
  {
    question: "In the context of multimedia, the theme primarily influences:",
    options: [
      "The hardware used for production",
      "The coherence and emotional connection of the content",
      "The audience's internet connection speed",
      "The number of elements in the project"
    ],
    answer: 1,
  },
  // 6
  {
    question: "Which of the following best illustrates a theme in multimedia?",
    options: [
      "A website focused on technology innovation",
      "Randomly selected stock images and audio tracks",
      "A video game without a storyline",
      "A presentation with unrelated colors and fonts"
    ],
    answer: 0,
  },
  // 7
  {
    question: "How does a theme enhance user experience in multimedia?",
    options: [
      "By creating confusing and unrelated content",
      "By guiding design choices to align with the message and audience needs",
      "By removing the need for interactivity",
      "By focusing only on technical details"
    ],
    answer: 1,
  },
  // 8
  {
    question: "What is a key characteristic of a strong theme?",
    options: [
      "It changes frequently throughout the project",
      "It aligns various multimedia elements towards a unified message",
      "It focuses on only one type of media, such as text or video",
      "It avoids creating an emotional connection with the audience"
    ],
    answer: 1,
  },
  // 9
  {
    question: "Why is consistency in theme important for multimedia projects?",
    options: [
      "To reduce the time spent on design",
      "To ensure coherence and enhance the audience's understanding",
      "To limit the use of creative elements",
      "To prioritize technical aspects over storytelling"
    ],
    answer: 1,
  },
  // 10
  {
    question: "Which of the following is an example of a poorly executed theme?",
    options: [
      "A health-focused app using calming colors and intuitive navigation",
      "A video with unrelated audio, random fonts, and mixed messages",
      "A technology website with a sleek, modern design",
      "A movie using a narrative aligned with its soundtrack"
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
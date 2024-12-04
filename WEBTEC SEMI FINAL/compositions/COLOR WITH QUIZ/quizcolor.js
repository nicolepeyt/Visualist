setTimeout(() => {
  document.getElementById("gif-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}, 3000);

const questions = [
  // 1
  {
    question: "What is the primary purpose of understanding color composition in photography?",
    options: ["To learn how to mix paints effectively.",
      "To add technical complexity to photos.",
      "To communicate feelings, memories, and moods.",
      "To increase the file size of images."],
    answer: 2,
  },
  //2
  {
  question: "Which color model is primarily used for digital screens?",
    options: ["CMYK",
      "HSL",
      "RGB",
      "Pantone"],
    answer: 2,
  },
  //3
  {
    question: "How are colors created in the RGB color model?",
      options: ["By combining cyan, magenta, yellow, and black inks.",
        "By mixing primary colors with white.",
        "By adjusting the intensity of red, green, and blue light.",
        "By reflecting light off a surface."],
      answer: 2,
  },
  //4
  {
    question: "In the CMYK color model, what does the K stand for?",
      options: ["Key",
        "Kelvin",
        "Kernel",
        "Koala"],
      answer: 0,
  },
  //5
  {
    question: "What is the role of primary colors in color theory?",
      options: ["They are created by mixing other colors.",
        "They serve as the foundation for all other colors.",
        "They are used only for digital screens.",
        "They are the secondary colors in a palette."],
      answer: 1,
  },
  //6
  {
    question: "Which of the following color palettes would evoke a calm and peaceful mood?",
      options: ["Shades of blue and green",
        "Vibrant reds and oranges",
        "A mix of neon pinks and yellows",
        "Black and white"],
      answer: 0,
  },
  //7
  {
    question: "How can a photographer create harmony in a photograph?",
      options: ["By using as many colors as possible.",
        "By selecting a limited palette of complementary colors.",
        "By making all colors equally vibrant.",
        "By avoiding primary colors."],
      answer: 1,
  },
  //8
  {
    question: "What is an example of a cultural significance of color?",
      options: 
      ["Red is always associated with anger in every culture.",
        "White can symbolize purity in one culture and mourning in another.",
        "Blue always represents sadness across all cultures.",
        "Green is universally associated with envy."],
      answer: 1,
  },
  //9
  {
    question: "Which of the following tools helps photographers adjust hues, saturation, and brightness during post-processing?",
      options: 
      ["CMYK model",
        "HSL adjustments",
        "RGB calibration",
        "Histogram"],
      answer: 1,
  },
  {
    question: "What is a good strategy for emphasizing the subject in a photo?",
      options: 
      ["Use an overwhelming number of colors to distract from the subject.",
        "Include a single pop of color to draw attention to the subject.",
        "Make the subject blend in with the background.",
        "Use only black-and-white tones."],
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
(function () {
  const backTargets = [
    ["MultimediaElements/VIRTUAL WITH QUIZ/", "virtual.html"],
    ["MultimediaElements/THEME WITH QUIZ/", "themes.html"],
    ["MultimediaElements/TEXT WITH QUIZ/", "texts.html"],
    ["MultimediaElements/GRAPHICS WITH QUIZ/", "tgraphics.html"],
    ["MultimediaElements/SOUND WITH QUIZ/", "sound.html"],
    ["MultimediaElements/SPACE WITH QUIZ/", "space.html"],
    ["MultimediaElements/VIDEOGRAPHY WITH QUIZ/", "video.html"],
    ["compositions/NATURAL LIGHT WITH QUIZ/", "natural.html"],
    ["compositions/SPACE WITH QUIZ/", "space.html"],
    ["compositions/COLOR WITH QUIZ/", "color.html"],
    ["compositions/FRAMECOMPOSITION WITH QUIZ/", "framecomposition.html"],
    ["compositions/LINE WITH QUIZ/", "lines.html"],
    ["ruleofthirds/", "ROT.html"],
    ["videographyfinalfinal/VIDEOGRAPHY WITH QUIZ/", "video.html"],
    ["videographyfinalfinal/IMAGECONTROL WITH QUIZ/", "control.html"],
    ["videographyfinalfinal/VCOMPO WITH QUIZ/", "vcompo.html"],
    ["videographyfinalfinal/EQUIPMENT WITH QUIZ/", "equipments.html"],
    ["IMAGECONTROL WITH QUIZ/", "control.html"],
    ["VCOMPO WITH QUIZ/", "vcompo.html"],
    ["EQUIPMENT WITH QUIZ/", "equipments.html"],
    ["SOUND WITH QUIZ/", "sound.html"],
    ["MOBILE PHOTOGRAPHY WITH QUIZ/", "mobile.html"],
  ];

  function normalizedPath() {
    return decodeURIComponent(window.location.pathname).replace(/\\/g, "/");
  }

  function getBackTarget() {
    const path = normalizedPath();
    const match = backTargets.find(([segment]) => path.includes(segment));

    if (match) return match[1];
    return "javascript:history.back()";
  }

  function ensureBackButton() {
    if (document.querySelector(".quiz-back-button")) return;

    const button = document.createElement("a");
    button.className = "quiz-back-button";
    button.href = getBackTarget();
    button.textContent = "\u2190 Back";
    button.setAttribute("aria-label", "Back to topic");
    document.body.prepend(button);
  }

  function ensureCounter() {
    let counter = document.getElementById("quiz-counter");
    if (counter) return counter;

    counter = document.createElement("div");
    counter.id = "quiz-counter";
    counter.className = "quiz-counter";
    counter.setAttribute("aria-live", "polite");

    const questionBox = document.querySelector(".question-box");
    if (questionBox) {
      questionBox.prepend(counter);
    }

    return counter;
  }

  window.updateQuizCounter = function updateQuizCounter(index, total) {
    const counter = ensureCounter();
    if (!counter) return;

    const current = Number(index) + 1;
    counter.textContent = `Question ${current}/${total}`;
  };

  document.addEventListener("DOMContentLoaded", () => {
    ensureBackButton();
    ensureCounter();
  });
})();

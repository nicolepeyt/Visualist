(function () {
  function getLessonArea() {
    const path = window.location.pathname.replace(/\\/g, "/");

    if (path.includes("/MultimediaElements/")) return "multimedia";
    if (path.includes("/Rules/Rules/") || path.includes("/compositions/")) return "photography";
    if (path.includes("/videographyfinalfinal/")) return "videography";

    return "general";
  }

  function getBackTarget() {
    const path = window.location.pathname.replace(/\\/g, "/");

    if (path.includes("/compositions/Rules/Rules/")) {
      return "../../compo.html";
    }

    if (path.includes("/Rules/Rules/")) {
      return "../../compositions/compo.html";
    }

    if (path.includes("/MultimediaElements/")) {
      return "../multi.html";
    }

    if (path.includes("/compositions/")) {
      return "../compo.html";
    }

    if (path.includes("/videographyfinalfinal/")) {
      return "../overview.html";
    }

    return "javascript:history.back()";
  }

  if (document.body) {
    document.body.classList.add(`lesson-area-${getLessonArea()}`);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add(`lesson-area-${getLessonArea()}`);

    document.querySelectorAll(".quiz-button").forEach((quizButton) => {
      quizButton.parentElement?.classList.add("lesson-quiz-action");
    });

    if (document.querySelector(".lesson-back-button")) return;

    const button = document.createElement("a");
    button.className = "lesson-back-button";
    button.href = getBackTarget();
    button.textContent = "\u2190 Back";
    button.setAttribute("aria-label", "Back to lesson topics");

    document.body.prepend(button);
  });
})();

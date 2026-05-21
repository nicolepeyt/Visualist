(function () {
  const LOGGED_IN_KEY = "visualistLoggedIn";

  function pathToHome() {
    const path = window.location.pathname.replace(/\\/g, "/");
    const visualistIndex = path.lastIndexOf("/Visualist/");

    if (visualistIndex !== -1) {
      return `${path.slice(0, visualistIndex + "/Visualist/".length)}homepage/index.html`;
    }

    return "../../homepage/index.html";
  }

  if (sessionStorage.getItem(LOGGED_IN_KEY) !== "true") {
    window.location.href = `${pathToHome()}?login=1`;
    return;
  }

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
      if (quizButton.parentElement?.classList.contains("lesson-quiz-action")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "lesson-quiz-action";
      quizButton.before(wrapper);
      wrapper.appendChild(quizButton);
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

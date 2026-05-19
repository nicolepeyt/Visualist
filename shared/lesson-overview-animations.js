(function () {
  const animatedSelectors = [
    [".component-title h1", "from-bottom"],
    [".header-image", "from-bottom"],
    [".content1 h2", "from-bottom"],
    [".content1 p", "from-bottom"],
    [".services-section", "from-bottom"],
    [".container-second", "from-left"],
    [".container-natural", "from-right"],
    [".container-space", "from-left"],
    [".container-video", "from-right"],
  ];

  function markAnimatedElements() {
    animatedSelectors.forEach(([selector, direction]) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.classList.add("overview-animate", direction);
      });
    });
  }

  function revealWithObserver() {
    const animatedElements = document.querySelectorAll(".overview-animate");

    if (!("IntersectionObserver" in window)) {
      animatedElements.forEach((element) => element.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    animatedElements.forEach((element) => observer.observe(element));
  }

  document.addEventListener("DOMContentLoaded", () => {
    markAnimatedElements();
    revealWithObserver();
  });
})();

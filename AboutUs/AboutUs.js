document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-list");
  const menuButton = document.querySelector(".menu-btn");
  const cancelButton = document.querySelector(".cancel-btn");

  menuButton?.addEventListener("click", () => {
    menu?.classList.add("open");
  });

  cancelButton?.addEventListener("click", () => {
    menu?.classList.remove("open");
  });

  menu?.addEventListener("click", (event) => {
    if (event.target.closest("a") || event.target.closest("button")) {
      menu.classList.remove("open");
    }
  });

  if (window.ScrollReveal) {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".card", {
      ...scrollRevealOption,
      interval: 180,
    });

    ScrollReveal().reveal(".about__image img", {
      ...scrollRevealOption,
      origin: "left",
    });

    ScrollReveal().reveal(".about__content", {
      ...scrollRevealOption,
      interval: 220,
    });
  }
});

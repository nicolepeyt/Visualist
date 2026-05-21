(function () {
  const LOGGED_IN_KEY = "visualistLoggedIn";

  function pathToHome() {
    const path = window.location.pathname.replace(/\\/g, "/");
    const visualistIndex = path.lastIndexOf("/Visualist/");

    if (visualistIndex !== -1) {
      return `${path.slice(0, visualistIndex + "/Visualist/".length)}homepage/index.html`;
    }

    return "../homepage/index.html";
  }

  function requireLogin() {
    if (sessionStorage.getItem(LOGGED_IN_KEY) === "true") return true;

    window.location.href = `${pathToHome()}?login=1`;
    return false;
  }

  function logout() {
    sessionStorage.removeItem(LOGGED_IN_KEY);
    window.location.href = pathToHome();
  }

  function ensureLogoutButton() {
    const menu = document.querySelector(".menu-list");
    if (!menu || menu.querySelector(".logout-btn")) return;

    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "logout-btn";
    button.textContent = "Log Out";
    button.addEventListener("click", logout);
    item.appendChild(button);
    menu.appendChild(item);
  }

  function setupMobileMenu() {
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
  }

  function setupStickyNav() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const update = () => {
      nav.classList.toggle("sticky", window.scrollY > 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!requireLogin()) return;

    ensureLogoutButton();
    setupMobileMenu();
    setupStickyNav();
  });

  window.visualistLogout = logout;
})();

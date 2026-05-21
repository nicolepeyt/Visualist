const AUTH_STORAGE_KEY = "visualistUser";
const LOGIN_SESSION_KEY = "visualistLoggedIn";
const LOGIN_REDIRECT = "../LandingPage/LandingPage.html";

let isLoggedIn = sessionStorage.getItem(LOGIN_SESSION_KEY) === "true";
let lastScrollY = window.scrollY;

const overlay = document.getElementById("overlay");
const loginForm = document.getElementById("loginForm");
const authToast = document.getElementById("authToast");
const card = document.querySelector(".card-form");
const loginCloseBtn = document.querySelector(".login-close-btn");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuList = document.querySelector(".menu-list");

function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || null;
  } catch {
    return null;
  }
}

function saveUser(username, password) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ username, password }));
}

function showNotice(message, type = "info") {
  if (!authToast) return;

  authToast.textContent = message;
  authToast.className = `auth-toast show ${type}`;

  window.clearTimeout(showNotice.timer);
  showNotice.timer = window.setTimeout(() => {
    authToast.className = "auth-toast";
  }, 3200);
}

function openLoginForm(showSignup = false) {
  if (isLoggedIn || !overlay || !loginForm) return;

  card?.classList.toggle("flipped", showSignup);
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");
  overlay.classList.add("active");
  loginForm.style.display = "block";

  window.setTimeout(() => {
    loginForm.classList.add("active");
  }, 50);

  resetAuthFields();
}

function closeLoginForm() {
  overlay?.classList.remove("active");
  loginForm?.classList.remove("active");
  document.documentElement.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");

  window.setTimeout(() => {
    if (loginForm && !loginForm.classList.contains("active")) {
      loginForm.style.display = "none";
    }
  }, 250);
}

function login() {
  if (isLoggedIn) {
    window.location.href = LOGIN_REDIRECT;
    return;
  }

  openLoginForm(false);
}

function flipCard() {
  card?.classList.toggle("flipped");
  resetAuthFields();
}

function resetAuthFields() {
  ["username", "password", "create-user", "create-pass"].forEach((id) => {
    const input = document.getElementById(id);
    if (input) {
      input.value = "";
      if (input.type === "text" && id.includes("pass")) input.type = "password";
    }
  });

  document.querySelectorAll(".toggle-password").forEach((button) => {
    button.hidden = true;
    button.style.display = "none";
    button.textContent = "Show";
  });
}

function checkPasswordInput(inputField, formType) {
  const toggleIcon = formType === "login"
    ? document.querySelector("#password + .toggle-password")
    : document.querySelector("#create-pass + .toggle-password");

  if (toggleIcon) {
    toggleIcon.hidden = !inputField.value;
    toggleIcon.style.display = inputField.value ? "inline-flex" : "none";
  }
}

function togglePasswordField(inputId) {
  const passwordField = document.getElementById(inputId);
  const toggleIcon = passwordField?.nextElementSibling;
  if (!passwordField || !toggleIcon) return;

  const shouldShow = passwordField.type === "password";
  passwordField.type = shouldShow ? "text" : "password";
  toggleIcon.textContent = shouldShow ? "Hide" : "Show";
}

function togglePasswordVisibility() {
  togglePasswordField("password");
}

function togglePasswordVisibilitySignup() {
  togglePasswordField("create-pass");
}

document.getElementById("loginFormElement")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const savedUser = getSavedUser();

  if (savedUser && username === savedUser.username && password === savedUser.password) {
    isLoggedIn = true;
    sessionStorage.setItem(LOGIN_SESSION_KEY, "true");
    showNotice("Login successful. Opening your dashboard...", "success");
    closeLoginForm();

    window.setTimeout(() => {
      window.location.href = LOGIN_REDIRECT;
    }, 650);
    return;
  }

  showNotice("Account not found. Please check your details or create an account first.", "error");
});

document.getElementById("signupFormElement")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const createUsername = document.getElementById("create-user").value.trim();
  const createPassword = document.getElementById("create-pass").value;

  if (!createUsername || !createPassword) {
    showNotice("Please enter a username and password.", "error");
    return;
  }

  saveUser(createUsername, createPassword);
  showNotice("Account created. You can now log in.", "success");
  card?.classList.remove("flipped");
  resetAuthFields();
});

if (new URLSearchParams(window.location.search).get("login") === "1" && !isLoggedIn) {
  openLoginForm(false);
}

overlay?.addEventListener("click", (event) => {
  event.preventDefault();
  if (!isLoggedIn && loginForm?.classList.contains("active")) {
    showNotice("Use the close button if you want to continue without logging in.", "info");
  }
});

loginCloseBtn?.addEventListener("click", closeLoginForm);

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  if (!isLoggedIn && !loginForm?.classList.contains("active") && isScrollingDown && currentScrollY > 1500) {
    openLoginForm(false);
  }

  lastScrollY = currentScrollY;
});

menuBtn?.addEventListener("click", () => {
  menuList?.classList.add("open");
});

cancelBtn?.addEventListener("click", () => {
  menuList?.classList.remove("open");
});

menuList?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuList.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");
  if (loginButton && isLoggedIn) {
    loginButton.setAttribute("aria-label", "Open logged-in homepage");
  }
});

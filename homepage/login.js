// Simulate login status
let isLoggedIn = false;
let savedUser = '';
let savedPass = '';




// Elements
    const overlay = document.getElementById('overlay');
    const loginForm = document.getElementById('loginForm');
    // const errorMessage = document.createElement('p');
    // errorMessage.style.color = 'red'; // Style the error message
    // const accountCreated = document.createElement('p');
    // accountCreated.style.color = 'blue';
    // const accountCreated1 = document.createElement('p');
    // accountCreated1.style.color = 'blue';

// Show login form after scrolling past a certain point
window.addEventListener('scroll', () => {
        if (!isLoggedIn && window.scrollY > 2500) { // Only if not logged in
        overlay.classList.add('active');
        loginForm.style.display = 'block';
        setTimeout(() => {
            document.body.classList.add('no-scroll');
            loginForm.classList.add('active');
        }, 50);// Small delay to ensure animation 
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});

// Handle login form submission
document.getElementById('loginFormElement').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Clear any previous error message
    // if (loginForm.contains(errorMessage)) {
    //     loginForm.removeChild(errorMessage);
    // }

    // Check if login credentials match the saved ones
    if (username === savedUser && password === savedPass) {
        isLoggedIn = true; // Mark user as logged in
        document.body.classList.remove('no-scroll'); // Allow scrolling
        overlay.classList.remove('active'); // Hide overlay
        loginForm.classList.remove('active'); // Hide login form
        alert('You are now logged in!'); // Simulate login success
        window.location.href = '/Visualist/LandingPage/LandingPage.html';
    } 
    else {
        // Display error message if login fails
        alert( 'Couldn\'t find your account information. Please try again or create an account first! ');
    }

});
    
// Handle signup form submission
    document.getElementById('signupFormElement').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const createUsername = document.getElementById('create-user').value;
    const createPassword = document.getElementById('create-pass').value;
    
    // Save the entered credentials for future login attempts
    savedUser = createUsername;
    savedPass = createPassword;
    
    alert('Account Created!, Please proceed to Log In');
    flipCard();
    // accountCreated.textContent = 'Account Created!';
    // accountCreated1.textContent = 'Please proceed to Log In';

    // //Message Account Created
    // accountCreated.style.textAlign = 'center';
    // accountCreated1.style.textAlign = 'center';

    // loginForm.appendChild(accountCreated);
    // loginForm.appendChild(accountCreated1);
    signupToggleIcon.style.display = 'none';

    
  
    // alert('Account Created!'); // Simulate sign-up success
    // flipCard(); // Flip back to login after signup

    // Clear the sign-up form fields
    document.getElementById('create-user').value = '';
    document.getElementById('create-pass').value = '';
    
});


// Flip card function
function flipCard() {
    const card = document.querySelector('.card-form');
    card.classList.toggle('flipped'); // Toggle the 'flipped' class to flip the card

    // Reset the password fields
    const loginPasswordField = document.getElementById('password');
    const signupPasswordField = document.getElementById('create-pass');

    // Reset login password field and hide its toggle icon
    loginPasswordField.value = '';
    loginPasswordField.type = 'password';
    const loginToggleIcon = loginPasswordField.nextElementSibling;
    if (loginToggleIcon) {
        loginToggleIcon.style.display = 'none';
        loginToggleIcon.textContent = '👁️'; // Reset to show icon
    }

    // Reset signup password field and hide its toggle icon
    signupPasswordField.value = '';
    signupPasswordField.type = 'password';
    const signupToggleIcon = signupPasswordField.nextElementSibling;
    if (signupToggleIcon) {
        signupToggleIcon.style.display = 'none';
        signupToggleIcon.textContent = '👁️'; // Reset to show icon
    }

    // if (loginForm.contains(errorMessage)){
    //     loginForm.removeChild(errorMessage);

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
    
    // if (loginForm.contains(accountCreated) && loginForm.contains(accountCreated1)){
    //     loginForm.removeChild(accountCreated);
    //     loginForm.removeChild(accountCreated1);
    // }
    document.getElementById('create-user').value = '';
    document.getElementById('create-pass').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    
}

function checkPasswordInput(inputField, formType) {
    const toggleIcon = formType === 'login' 
        ? document.querySelector('#password + .toggle-password') 
        : document.querySelector('#create-pass + .toggle-password');
    
    if (inputField.value) {
        toggleIcon.style.display = 'inline'; // Show the icon
    } else {
        toggleIcon.style.display = 'none'; // Hide the icon
    }
}
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = passwordField.nextElementSibling;

    if (passwordField.type === "password") {
        passwordField.type = "text"; // Show password
        toggleIcon.textContent = "🙈"; // Change icon to "hide" icon
    } else {
        passwordField.type = "password"; // Hide password
        toggleIcon.textContent = "👁️"; // Change icon back to "show" icon
    }
}

function togglePasswordVisibilitySignup() {
    const passwordField1 = document.getElementById('create-pass');
    const toggleIcon1 = passwordField1.nextElementSibling;

    if (passwordField1.type === "password") {
        passwordField1.type = "text"; // Show password
        toggleIcon1.textContent = "🙈"; // Change icon to "hide" icon
    } else {
        passwordField1.type = "password"; // Hide password
        toggleIcon1.textContent = "👁️"; // Change icon back to "show" icon
    }
}
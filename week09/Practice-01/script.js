const signupForm = document.querySelector('form');
const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');
const messageDisplay = document.getElementById('message');

const displayMessage = (text, status) => {
  messageDisplay.textContent = text;
  messageDisplay.className = `message ${status}`;
};

signupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const username = usernameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();
  const confirmPassword = confirmPasswordField.value.trim();

  if (!username || !email || !password || !confirmPassword) {
    displayMessage('missing some values, please try again!', 'error');
  } else if (password !== confirmPassword) {
    displayMessage('password and confirm do not match, check again', 'error');
  } else {
    displayMessage('your data completed', 'success');
    signupForm.reset();
  }
});
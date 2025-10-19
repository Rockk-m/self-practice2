const inputField = document.getElementById('keyInput');
const keyHistory = document.getElementById('keyLog');

inputField.addEventListener('keyup', function (e) {
  const logEntry = document.createElement('p');

  logEntry.textContent = `You pressed: ${e.key}`;

  logEntry.style.color = e.key === 'Enter' ? 'blue' : 'black';

  keyHistory.appendChild(logEntry);
});
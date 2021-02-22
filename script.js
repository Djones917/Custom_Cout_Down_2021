const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');


// Set Date Input Min With Today's Date
const today = new Date().toISOString().split('T')[0]; 
dateEl.setAttribute('min', today);

// Update Countdown - Take Values From Form Input
function updateCountdown(e) {
    e.preventDefault();
   console.log(e);
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
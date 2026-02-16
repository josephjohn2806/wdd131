/* --- 1. Mobile Menu Toggle  --- */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });
}

/* --- 2. Visit Tracker  --- */
const visitDisplay = document.querySelector('#visit-tracker');
let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

// Update the count
numVisits++;

// Save the updated count back to localStorage
localStorage.setItem('numVisits-ls', numVisits);

// Display the message using Template Literals
if (visitDisplay) {
    if (numVisits !== 1) {
        visitDisplay.textContent = `Total Site Visits: ${numVisits}`;
    } else {
        visitDisplay.textContent = `Welcome! This is your first visit to Musembi Earthways.`;
    }
}

/* --- 3. Dynamic Footer Year --- */
const footerYear = document.querySelector('#currentyear');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}




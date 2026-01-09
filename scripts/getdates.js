// Set current year
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = document.lastModified;

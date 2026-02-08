// Update footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Review Counter Logic for review.html
if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    
    // Optional: Display the count on the page
    const messageContainer = document.querySelector(".confirmation-message");
    const countDisplay = document.createElement("p");
    countDisplay.textContent = `Total reviews submitted: ${reviewCount}`;
    messageContainer.appendChild(countDisplay);
}


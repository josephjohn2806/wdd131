/* JavaScript for Musembi Earthways Safaris */

document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Hamburger Menu Logic (DOM Interaction & Event Listening) ---
    const menuBtn = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            const isOpened = navMenu.classList.toggle("open");
            menuBtn.classList.toggle("active");
            // Conditional branching for Accessibility
            menuBtn.setAttribute("aria-expanded", isOpened ? "true" : "false");
        });
    }

    // --- 2. LocalStorage Visit Tracker (Objects & Conditional Branching) ---
    const visitMsg = document.querySelector("#visit-message");
    if (visitMsg) {
        // Use localStorage to keep track of user sessions
        let visits = Number(window.localStorage.getItem("safari-visits")) || 0;

        // Conditional branching to change message based on visit count
        if (visits === 0) {
            // Exclusively use Template Literals for output strings
            visitMsg.innerHTML = `Welcome to the wild! This is your <strong>first visit</strong>. Explore our eco-reports!`;
        } else {
            visitMsg.innerHTML = `Welcome back, traveler! You have visited us <strong>${visits}</strong> times. Ready for your next adventure?`;
        }
        
        localStorage.setItem("safari-visits", visits + 1);
    }

    // --- 3. Dynamic Tour Generation (Arrays, Objects, & Methods) ---
    const tours = [
        { name: "Eco-Impact Solo", duration: "3 Days", price: "$1,200" },
        { name: "Family Cultural", duration: "5 Days", price: "$2,500" }
    ];

    const tourContainer = document.querySelector("#tour-grid");
    if (tourContainer) {
        // Using array methods to build dynamic content
        tours.forEach(tour => {
            const card = document.createElement("div");
            card.className = "tour-card";
            // Template literals for building strings
            card.innerHTML = `
                <h3>${tour.name}</h3>
                <p>Duration: ${tour.duration}</p>
                <p>Starting at ${tour.price}</p>
            `;
            tourContainer.appendChild(card);
        });
    }
});


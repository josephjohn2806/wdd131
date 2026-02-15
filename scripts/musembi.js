/**
 * Musembi Earthways Safaris - Main Script
 * Focus: Hamburger Menu, LocalStorage, and Dynamic UI
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. SELECT ELEMENTS
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-menu");
    const visitDisplay = document.querySelector("#visit-message");
    const contactForm = document.querySelector("#contactForm");

    // 2. HAMBURGER MENU LOGIC
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            
            // Toggle ARIA attribute for accessibility
            menuToggle.setAttribute("aria-expanded", isOpen);
            
            // Animate Hamburger to X (CSS handles the rotation, JS triggers the state)
            menuToggle.classList.toggle("active");
        });

        // Close menu when clicking outside (Professional UX)
        document.addEventListener("click", (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove("open");
                menuToggle.classList.remove("active");
            }
        });
    }

    // 3. VISIT TRACKER (LocalStorage & Template Literals)
    if (visitDisplay) {
        // Get the current count from storage, default to 0 if null
        let visitCount = Number(window.localStorage.getItem("musembi-visits")) || 0;

        if (visitCount === 0) {
            visitDisplay.innerHTML = `Welcome! 🌍 This is your first time exploring <strong>Musembi Earthways Safaris</strong>.`;
        } else {
            visitDisplay.innerHTML = `Welcome back! You have visited our wild spaces <strong>${visitCount}</strong> times.`;
        }

        // Increment and save back to localStorage
        visitCount++;
        localStorage.setItem("musembi-visits", visitCount);
    }

    // 4. CONTACT FORM HANDLING
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Extract values for a personalized message
            const firstName = document.querySelector("#name")?.value || "Adventurer";
            const safariType = document.querySelector("#safari-type")?.value || "General Safari";

            // Professional feedback using Template Literals
            const successMessage = `Asante, ${firstName}! Your inquiry for the ${safariType} has been received. Our conservation expert will reach out within 24 hours.`;
            
            alert(successMessage);
            contactForm.reset();
        });
    }

    // 5. ACTIVE LINK HIGHLIGHTER
    const navLinks = document.querySelectorAll(".nav-menu a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
        }
    });
});


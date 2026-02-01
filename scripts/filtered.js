// 1. Array of Temple Objects (Requirement #4 & #5)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/temples/details/aba-nigeria-temple/images/main.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/temples/details/manti-utah-temple/images/main.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/temples/details/payson-utah-temple/images/main.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/temples/details/washington-dc-temple/images/main.jpg"
  },
  // Adding 3 more as per instruction #5
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/temples/details/salt-lake-temple/images/main.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "https://content.churchofjesuschrist.org/temples/details/johannesburg-south-africa-temple/images/main.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/temples/details/accra-ghana-temple/images/main.jpg"
  }
];

// 2. Select HTML Elements
const templeGrid = document.querySelector(".temple-grid");
const galleryTitle = document.querySelector("#gallery-title");

// 3. Function to create and display temple cards (Requirement #6)
function displayTemples(filteredTemples) {
    templeGrid.innerHTML = ""; // Clear current display
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span>Location:</span> ${temple.location}</p>
            <p><span>Dedicated:</span> ${temple.dedicated}</p>
            <p><span>Area:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        `;
        templeGrid.appendChild(card);
    });
}

// 4. Filtering Logic (Requirement #7)
document.querySelector("#home").addEventListener("click", () => {
    galleryTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    galleryTitle.textContent = "Old Temples";
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    galleryTitle.textContent = "New Temples";
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    galleryTitle.textContent = "Large Temples";
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    galleryTitle.textContent = "Small Temples";
    displayTemples(temples.filter(t => t.area < 10000));
});

// 5. Initial Load & Footer Info
displayTemples(temples);
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu Toggle
document.querySelector("#menu").addEventListener("click", () => {
    document.querySelector(".navigation").classList.toggle("show");
});


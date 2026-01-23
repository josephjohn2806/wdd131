// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Weather values
const temp = 28; // Celsius
const wind = 12; // km/h

function calculateWindChill(t, w) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(w, 0.16)) + (0.3965 * t * Math.pow(w, 0.16));
}

// Wind chill conditions (metric)
if (temp <= 10 && wind > 4.8) {
    const chill = calculateWindChill(temp, wind).toFixed(1);
    document.getElementById("chill").textContent = `${chill} °C`;
} else {
    document.getElementById("chill").textContent = "N/A";
}

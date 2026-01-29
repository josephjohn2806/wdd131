// Footer: Current Year and Last Modification Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values for calculation as per assignment instructions
const temp = 9; // Celsius
const wind = 10; // km/h

/**
 * Requirement: Returns the result of the windchill calculation in one line.
 * Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
 */
function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

const windChillDisplay = document.getElementById("windchill");

// Requirement: Only call if Metric conditions (Temp <= 10 and Wind > 4.8) are met
if (temp <= 10 && wind > 4.8) {
    windChillDisplay.textContent = calculateWindChill(temp, wind) + "°C";
} else {
    windChillDisplay.textContent = "N/A";
}


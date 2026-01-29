// Footer: Current Year and Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
// Static values matching the HTML content
const temperature = 9; 
const windSpeed = 10;

/**
 * Calculates Wind Chill for Metric Units (°C, km/h)
 * Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
 */
const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const windChillElement = document.getElementById("windchill");

// Viable Conditions Check: Temp <= 10°C AND Wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed) + "°C";
} else {
    windChillElement.textContent = "N/A";
}


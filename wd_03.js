document.getElementById("convertBtn").addEventListener("click", function() {
    let temperature = parseFloat(document.getElementById("temperatureInput").value);
    let unit = document.getElementById("unitInput").value;

    if (isNaN(temperature)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    let convertedTemp = "";
    if (unit === "Celsius") {
        convertedTemp = `
            Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}°F <br>
            Kelvin: ${(temperature + 273.15).toFixed(2)}K
        `;
    } else if (unit === "Fahrenheit") {
        convertedTemp = `
            Celsius: ${((temperature - 32) * 5/9).toFixed(2)}°C <br>
            Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K
        `;
    } else if (unit === "Kelvin") {
        convertedTemp = `
            Celsius: ${(temperature - 273.15).toFixed(2)}°C <br>
            Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F
        `;
    }

    const resultDiv = document.getElementById("convertedTemp");
    resultDiv.innerHTML = convertedTemp;
    resultDiv.parentElement.classList.add('show');

    // Change background color based on the Celsius temperature
    let celsius;
    if (unit === "Celsius") {
        celsius = temperature;
    } else if (unit === "Fahrenheit") {
        celsius = (temperature - 32) * 5/9;
    } else if (unit === "Kelvin") {
        celsius = temperature - 273.15;
    }

    // Set background color based on the calculated Celsius value
    if (celsius > 30) {
        document.body.style.backgroundColor = '#ff7e5f'; // warm color
    } else if (celsius < 0) {
        document.body.style.backgroundColor = '#00c6ff'; // cool color
    } else {
        document.body.style.backgroundColor = '#89fffd'; // moderate temp
    }
});

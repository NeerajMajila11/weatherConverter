function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (isNaN(temperature)) {
        result = "Please enter a valid temperature.";
    } else {
        if (fromUnit === 'celsius') {
            if (toUnit === 'fahrenheit') {
                result = `${temperature}°C = ${celsiusToFahrenheit(temperature).toFixed(2)}°F`;
            } else if (toUnit === 'kelvin') {
                result = `${temperature}°C = ${celsiusToKelvin(temperature).toFixed(2)}K`;
            } else {
                result = `${temperature}°C = ${temperature}°C`; // Same unit
            }
        } else if (fromUnit === 'fahrenheit') {
            if (toUnit === 'celsius') {
                result = `${temperature}°F = ${fahrenheitToCelsius(temperature).toFixed(2)}°C`;
            } else if (toUnit === 'kelvin') {
                result = `${temperature}°F = ${fahrenheitToKelvin(temperature).toFixed(2)}K`;
            } else {
                result = `${temperature}°F = ${temperature}°F`; // Same unit
            }
        } else if (fromUnit === 'kelvin') {
            if (toUnit === 'celsius') {
                result = `${temperature}K = ${kelvinToCelsius(temperature).toFixed(2)}°C`;
            } else if (toUnit === 'fahrenheit') {
                result = `${temperature}K = ${kelvinToFahrenheit(temperature).toFixed(2)}°F`;
            } else {
                result = `${temperature}K = ${temperature}K`; // Same unit
            }
        }
    }

    document.getElementById('result').innerText = result;
}

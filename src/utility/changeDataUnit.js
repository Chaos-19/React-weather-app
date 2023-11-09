import {
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    kelvinToFahrenheit
} from "./unitConverter";

function convertWeatherUnit(data, currnt, unit) {
    if (unit === "fahrenheit" && currnt === "celsius") {
        // Convert the temperature from Kelvin to Fahrenheit
        data.main.temp = celsiusToFahrenheit(data.main.temp);
        data.main.feels_like = celsiusToFahrenheit(data.main.feels_like);
        data.main.temp_min = celsiusToFahrenheit(data.main.temp_min);
        data.main.temp_max = celsiusToFahrenheit(data.main.temp_max);
    } else if (unit === "celsius" && currnt === "fahrenheit") {
        // Convert the temperature from Kelvin to Celsius
        data.main.temp = fahrenheitToCelsius(data.main.temp);
        data.main.feels_like = fahrenheitToCelsius(data.main.feels_like);
        data.main.temp_min = fahrenheitToCelsius(data.main.temp_min);
        data.main.temp_max = fahrenheitToCelsius(data.main.temp_max);
    } else if ((unit === "fahrenheit", currnt === "Kelvin")) {
        // Convert the temperature from Kelvin to Celsius
        data.main.temp = kelvinToFahrenheit(data.main.temp);
        data.main.feels_like = kelvinToFahrenheit(data.main.feels_like);
        data.main.temp_min = kelvinToFahrenheit(data.main.temp_min);
        data.main.temp_max = kelvinToFahrenheit(data.main.temp_max);
    }
    return data;
}

export default convertWeatherUnit;

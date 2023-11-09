export const kelvinToFahrenheit = value => {
    return Math.round((9 / 5) * (value - 273) + 32);
};
export const fahrenheitToCelsius = value => {
    return Math.round((value - 32) / 1.8);
};
export const celsiusToFahrenheit = value => {
    return Math.round(9 / 5*(value) + 32);
};

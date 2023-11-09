const apiKey = "0099b020d49f8562476848d97aa48ffe";
export const currentWetherUrl = (city, corrd) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${
        city ? city : "addis ababa"
    }&appid=${apiKey}`;
};
export const extendeWetherUrl = ({ lat, lon }) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return url;
};

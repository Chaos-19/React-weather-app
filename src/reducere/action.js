import convertWeatherUnit from "../utility/changeDataUnit";
import { fetchWeatherForcast } from "./extendedForecastAction";

// action.js
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";
export const UPDATE_WEATHER = "UPDATE_WEATHER";

//action creators
export const fetchWeatherRequest = () => ({
    type: FETCH_WEATHER_REQUEST
});
export const fetchWeatherSuccess = data => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: data
});
export const fetchWeatherFailure = error => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error
});

// define an action creator
export const updateWeather = (data, unit) => ({
    type: UPDATE_WEATHER,
    payload: { data, unit }
});

// define a thunk action that fetches weather data from an API and dispatches the correct actions
export const fetchWeather = city => {
    return async dispatch => {
        dispatch(fetchWeatherRequest());
        try {
            const response = await fetch(city);
            const data = await response.json();
            dispatch(fetchWeatherSuccess(data));
            dispatch(changeUnit({ ...data }, "Kelvin", "fahrenheit"));
            const apiUrl = `${"https://api.openweathermap.org/data/2.5/forecast?"}lat=${
                data.coord.lat
            }&lon=${data.coord.lon}&appid=${process.env.REACT_APP_API_KEY}`;
            dispatch(fetchWeatherForcast(apiUrl));
        } catch (error) {
            alert(error);
            dispatch(fetchWeatherFailure(error));
        }
    };
};

export const changeUnit = (data, currnt, unit) => {
    return dispatch => {
        dispatch(updateWeather(convertWeatherUnit(data, currnt, unit), unit));
    };
};

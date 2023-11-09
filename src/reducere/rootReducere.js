import extendedForecastReducer from "./extendedForecast";
import { combineReducers } from "redux";

import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    UPDATE_WEATHER
} from "./action";

// reducer.js
// define the initial state of the weather
const initialState = {
    loading: false,
    data: null,
    error: null,
    unit: "kelvin"
};

// define the weather reducer
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        case UPDATE_WEATHER:
            return {
                ...state,
                loading: false,
                unit: action.payload.unit,
                data: action.payload.data
            };
        default:
            return state;
    }
};
// Combine the new weather unit reducer with the existing weather reducer
const rootReducer = combineReducers({
    weather: weatherReducer,
    extendedForecast: extendedForecastReducer
});
export default rootReducer;

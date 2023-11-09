import {
    EXTENDED_FORECAST_REQUEST,
    EXTENDED_FORECAST_SUCCESS,
    EXTENDED_FORECAST_FAILURE,
    UPDATE_EXTENDED_FORECAST
} from "./extendedForecastAction";

// reducer.js
// define the initial state of the weather
const initialState = {
    loading: false,
    data: null,
    error: null,
    unit: "kelvin"
};

// define the weather reducer
const extendedForecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXTENDED_FORECAST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case EXTENDED_FORECAST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case EXTENDED_FORECAST_FAILURE:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        case UPDATE_EXTENDED_FORECAST:
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

export default extendedForecastReducer;

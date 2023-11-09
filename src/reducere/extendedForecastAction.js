import convertWeatherUnit from "../utility/changeDataUnit";
import filterNearestTimeForcat from "../utility/filterFetchedData";

export const EXTENDED_FORECAST_REQUEST = "EXTENDED_FORECAST_REQUEST";
export const EXTENDED_FORECAST_SUCCESS = "EXTENDED_FORECAST_SUCCESS";
export const EXTENDED_FORECAST_FAILURE = "EXTENDED_FORECAST_FAILURE";
export const UPDATE_EXTENDED_FORECAST = "UPDATE_EXTENDED_FORECAST";

export const fetchExtendedForecast = () => ({
    type: EXTENDED_FORECAST_REQUEST
});

export const fetchExtendedForecastSuccess = data => ({
    type: EXTENDED_FORECAST_SUCCESS,
    payload: data
});

export const fetchExtendedForecastFailure = error => ({
    type: EXTENDED_FORECAST_FAILURE,
    payload: error
});

// define an action creator
export const updateForcat = (data, unit) => ({
    type: UPDATE_EXTENDED_FORECAST,
    payload: { data, unit }
});

export const fetchWeatherForcast = url => {
    return async dispatch => {
        dispatch(fetchExtendedForecast());
        try {
            const response = await fetch(url);
            const data = await response.json();
            const forcat = filterNearestTimeForcat(data.list);

            dispatch(fetchExtendedForecastSuccess(forcat));
            dispatch(changeForcastUnit(forcat, "Kelvin", "fahrenheit"));
        } catch (error) {
            dispatch(fetchExtendedForecastFailure(error));
        }
    };
};

export const changeForcastUnit = (data, currnt, unit) => {
    return dispatch => {
        if (data) {
            let changedData = data.map(value => {
                return convertWeatherUnit(value, currnt, unit);
            });
            dispatch(updateForcat(changedData, unit));
        }
    };
};

import { useSelector, useDispatch } from "react-redux";
import { changeUnit } from "../reducere/action";
import { useState, useEffect } from "react";
import { changeForcastUnit } from "../reducere/extendedForecastAction";

const Switch = () => {
  const dispatch = useDispatch();  const { data, unit } = useSelector(state => state.weather);

    const { data: forcast } = useSelector(state => state.extendedForecast);
    const [weatherUnit, setWeatherUnit] = useState(unit);

    function handleUnitChange() {
        setWeatherUnit(weatherUnit === "fahrenheit" ? "celsius" : "fahrenheit");
    }

    useEffect(() => {
        dispatch(changeUnit({ ...data }, unit, weatherUnit));
        dispatch(changeForcastUnit(forcast, unit, weatherUnit));
    }, [unit, weatherUnit,dispatch]);

    return (
        <div>
            <label for="toggle" className="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only peer"
                    checked={!(weatherUnit === "fahrenheit")}
                    onClick={handleUnitChange}
                />
                <div className="inputEl">
                    <span>F</span>
                    <span>C</span>
                </div>
            </label>
        </div>
    );
};
export default Switch;

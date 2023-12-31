import { useSelector } from "react-redux";
import WeatherIcon from "./WeatherIcon";

const ExtendedForecast = ({ currentUnit }) => {
    const { data } = useSelector(state => state.extendedForecast);

    const getDataName = value => {
        return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
            new Date(value).getDay()
        ];
    };

    return (
        <div className="bg-panel text-panel rounded-xl mx-2 mt-3 p-3">
            <h3 className="text-2xl capitalize py-3">Extended Forcast</h3>
            <div className="flex flex-row w-full overflow-scroll md:justify-around justify-between text-sm">
                {data &&
                    data.map((v, i) => {
                        return (
                            <div
                                className={`flex flex-col items-center flex-shrink-0 ${
                                    i == 0
                                        ? "ml-auto"
                                        : i == data.length - 1
                                        ? "mr-auto"
                                        : ""
                                } md:m-0`}
                                key={v.dt}
                            >
                                <div>{getDataName(v.dt_txt)}</div>
                                <WeatherIcon code={v.weather[0].id} />
                                <div className="text-center">
                                    {v.weather[0].description}
                                </div>
                                <div>
                                    <span>{v.main.temp_max}</span>
                                    <sup>&deg;</sup>
                                    {"/"}
                                    <span>{v.main.temp_min}</span>
                                    <sup>&deg;</sup>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
export default ExtendedForecast;

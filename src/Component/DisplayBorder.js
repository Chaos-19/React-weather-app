import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { WiCloudyGusts } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { useSelector } from "react-redux";
import Switch from "./Switch";

import WeatherIcon from "./WeatherIcon";

const DisplayBorder = () => {
    const { data } = useSelector(state => state.weather);

    const {
        name,
        main: { temp, pressure, humidity, feels_like, temp_max, temp_min },
        weather: [{ description, id }],
        wind: { speed } //, deg, gust
    } = data;

    return (
        <div className="bg-panel text-panel rounded-xl mx-2 mt-3 p-3">
            <div className="flex justify-between items-center w-full py-3">
                <h3 className="text-2xl font-thin">Current Weather</h3>
                <Switch />
            </div>
            <div className="main-bord flex flex-col md:flex-row  md:items-center mb-10">
                <div className="info mt-5 md:mt-0 ml-3 md:w-2/5">
                    <h3 className="text-2xl ml-4">{name}</h3>
                    <div className="condition flex gap-4 items-center ml-3">
                        <WeatherIcon code={id} type={"big"} />
                        <span
                            className="font-light"
                            style={{ fontSize: "7rem" }}
                        >
                            {temp}
                            <sup>&deg;</sup>
                        </span>
                    </div>
                    <h3 className="text-2xl ml-4 mt-4">{description}</h3>
                </div>
                <div className="info mt-9 md:my-0 md:ml-10 self-center">
                    <div className="text-2xl">
                        Feels like {feels_like}
                        <sup>&deg;</sup>
                    </div>
                    <div className="flex gap-2 text-2xl mt-4">
                        <FaLongArrowAltUp />
                        <span className="mr-5">
                            {temp_max}
                            <sup>&deg;</sup>
                        </span>
                        <FaLongArrowAltDown />
                        <span>
                            {temp_min}
                            <sup>&deg;</sup>
                        </span>
                    </div>
                    <div className="mt-6">
                        <div className="grid grid-cols-2 gap-7 text-2xl">
                            <span className="flex items-center gap-4">
                                <WiHumidity className="text-2xl" /> humidity
                            </span>
                            <span className="dark:text-blue-500">
                                {humidity}%
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-7 text-2xl">
                            <span className="flex items-center gap-4">
                                <WiCloudyGusts /> wind
                            </span>
                            <span className="dark:text-blue-500">
                                {speed}kmph
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-7 text-2xl">
                            <span className="flex items-center gap-4">
                                <WiBarometer /> pressure
                            </span>
                            <span className="dark:text-blue-500">
                                {pressure}hps
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DisplayBorder;

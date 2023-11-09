import { useState } from "react";
import { useTheme } from "../Hooks/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";
import SearchBar from "./SearchBar";
import github from "../assets/github.svg";

const Header = () => {
    const { colorTheme, setTheme } = useTheme();

    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <div className="flex justify-between items-center py-5 px-2">
                <h1 className="text-4xl leading-none text-head dark:text-blue-500">
                    Weather App
                </h1>
                <div className="flex gap-4 items-center">
                    <DarkModeToggle
                        checked={darkSide}
                        onChange={toggleDarkMode}
                        size={75}
                    />
                    <a href="https://chaos-19.github.io/React-weather-app/">
                        <img
                            width="34"
                            height="34"
                            src={github}
                            alt="git icon"
                        />
                    </a>
                </div>
            </div>
            <SearchBar />
        </>
    );
};
export default Header;

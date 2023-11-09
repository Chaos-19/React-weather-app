import { useState } from "react";
import { useTheme } from "../Hooks/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";
import SearchBar from "./SearchBar";

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
                <h1 className="text-4xl leading-none text-head">Weather App</h1>
                <DarkModeToggle
                    checked={darkSide}
                    onChange={toggleDarkMode}
                    size={70}
                />
            </div>
            <SearchBar  />
        </>
    );
};
export default Header;

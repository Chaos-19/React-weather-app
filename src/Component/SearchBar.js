import { GoSearch } from "react-icons/go";
import { BsFillGeoAltFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../reducere/action";
import useGeolocation from "../Hooks/useGeolocation";
import useInput from "../Hooks/useInput";
import { useEffect } from "react";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useInput();
    const { location, error, getLocation } = useGeolocation();

    const dispatch = useDispatch();

    const handleClick = async e => {
        await getLocation();
        const apiUrl = `${process.env.REACT_APP_BASE_URL}lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`;
        dispatch(fetchWeather(apiUrl));
    };
    const handleKeyDown = event => {
        if (event.key === "Enter") {
            const apiUrl = `${process.env.REACT_APP_BASE_URL}q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}`;
            dispatch(fetchWeather(apiUrl));
        }
    };
    useEffect(() => {
        const handleEnterKeyDown = event => {
            if (event.key === "Enter") {
                // Simulate the keydown event for the Enter key
                const syntheticEvent = new KeyboardEvent("keydown", {
                    key: "Enter",
                    code: "Enter",
                    keyCode: 13,
                    which: 13
                }); // Dispatch the synthetic event to a specific element or window
                document.dispatchEvent(syntheticEvent);
            }
        }; // Add the event listener during component mount
        document.addEventListener("keydown", handleEnterKeyDown);
        // Remove the event listener during component unmount
        return () => {
            document.removeEventListener("keydown", handleEnterKeyDown);
        };
    }, []);

    return (
        <div className="mx-2 flex justify-center items-center  bg-search rounded-full mt-3">
            <GoSearch className="text-3xl text-gray-500 dark:text-gray-400 mx-3" />
            <input
                type="search"
                value={searchValue}
                onKeyDown={handleKeyDown}
                className="block w-full py-3 pl-4 text-md focus:outline-none bg-search placeholder-blue-400 placeholder-opacity-25 text-search"
                onChange={setSearchValue}
                placeholder="Search"
            />
            <BsFillGeoAltFill
                className="text-3xl text-gray-500 dark:text-gray-400 mx-3.5"
                onClick={handleClick}
            />
        </div>
    );
};
export default SearchBar;

import { useState } from "react";

const useGeolocation = () => {
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);

    const getLocation = async () => {
        const successHandler = position => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lon: longitude });
        };

        const errorHandler = error => {
            setError(error.message);
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                successHandler,
                errorHandler
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    return { location, error, getLocation };
};

export default useGeolocation;

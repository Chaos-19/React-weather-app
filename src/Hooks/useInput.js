import { useState } from "react";

const useInput = () => {
    const [inputValue, setInputValue] = useState(null);

    const handleChange = e => setInputValue(e ? e.target.value : e);

    return [inputValue, handleChange];
};
export default useInput;

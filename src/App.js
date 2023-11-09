import Header from "./Component/Header";
import DisplayBorder from "./Component/DisplayBorder";
import ExtendedForecast from "./Component/ExtendedForecast";
import Loader from "./Component/Loader";

import { useSelector } from "react-redux";

function App() {
    const { loading, data, error } = useSelector(state => state.weather);

    return (
        <div className="h-screen grid place-items-center w-full bg-primary">
            <div className="main w-full max-w-4xl relative">
                <Header />

                {loading && (
                    <div>
                        <Loader />
                    </div>
                )}
                {error && <div className="text-center">error</div>}
                {data && (
                    <>
                        <DisplayBorder />
                        <ExtendedForecast />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;

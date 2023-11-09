import { ThemeProvider as Provider } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
    return <Provider>{children}</Provider>;
};

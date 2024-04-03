import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Wrapper = ({children}) => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;

    return <div style={{backgroundColor: theme.bg, minHeight: '100vh'}}>
        {children}
    </div>;
}

export default Wrapper;
import { createContext, useState } from "react";
import lightBg from '../assets/bg-desktop-light.jpg';
import darkBg from '../assets/bg-desktop-dark.jpg';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: {text: 'hsl(235, 21%, 11%)', todoBg: '#fff', bg: '#fff', btnText: 'hsl(234, 11%, 52%)', bgImg: `url(${lightBg})`, active: 'hsl(220, 98%, 61%)'},
        dark: {text: 'hsl(234, 39%, 85%)', todoBg: 'hsl(235, 24%, 19%)', bg: 'hsl(235, 21%, 11%)', btnText: 'hsl(234, 39%, 85%)', bgImg: `url(${darkBg})`, active: 'hsl(220, 98%, 61%)'},
    });

    const toggleTheme = () => {
        setTheme(prevState => ({
            ...prevState,
            isLightTheme: !prevState.isLightTheme,
        }));
    };

    return <ThemeContext.Provider value={{...theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;
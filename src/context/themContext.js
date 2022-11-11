import { createContext,useState } from "react";

//create context
const ThemeContext = createContext();

// create provider
function ThemeProvider({ children }) {
    const[theme,setTheme]=useState('dark')
    const [color,setColor]=useState('black')
    

  const toggleTheme = () => {
    if(theme==='red'){
        setTheme('drak')
        setColor('black')
    }else{
        setTheme('red')
        setColor('pink')
    }
    };

    const value = {
        theme,
        color,
        toggleTheme
    };
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
  
}
export { ThemeContext, ThemeProvider };




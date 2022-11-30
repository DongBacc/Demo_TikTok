import { useReducer, createContext } from "react";
import { invilidState } from "../Context/context";
import { Reducer } from "../Reducer/reducer";
const ThemeContext = createContext();
const Paragraph = ({ children }) => {
  const [state, dispacth] = useReducer(Reducer, invilidState);
  return (
    <ThemeContext.Provider value={{ state, dispacth }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, Paragraph };
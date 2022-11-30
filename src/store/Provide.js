
import { useReducer } from "react";
import Context from "./Context";
import {innitState,reducer} from './reduce'
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, innitState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default Provider;
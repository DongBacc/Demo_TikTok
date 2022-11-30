

import { useContext, useRef } from "react";
import { ThemeContext } from "./Paragraph/paragraph";
import {  Heart, Letters } from "./Context/context";


export default function AppV2() {
  let boolean = useRef(false);
  const handleOption = () => {
    if (boolean.current) {
      boolean.current = false;
      return Heart;
    } else {
      boolean.current = true;
      return Letters;
    }
  };

  const color = useContext(ThemeContext);
  const { facolor, soncolor } = color.state;
  const dispacth=color.dispacth

  return (
    <div>
      <div className={facolor}>
        <div className={soncolor}></div>
      </div>
      <button onClick={() => dispacth(handleOption())}>Toggle</button>
    </div>
  );
}


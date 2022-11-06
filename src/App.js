
import UseRef from "./useRef";
import Content from "./useEffect";
import { useState } from "react";
  

const isTrue=true
function App() {
  
  const[show,setShow]=useState(false)
  
  return (
    <div className="App" style={{padding:20}}>
      {/* <button onClick={()=>{setShow(!show)}}>Click</button>
      {show&&<Content/>} */}
      <UseRef/>
   </div>
  );

  }
  

export default App;

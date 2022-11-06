import {useState,useRef,useEffect} from "react";

function UseRef(){
    const[count,setCount]=useState(60)
    const h1Ref=useRef()
    
    let timeId=useRef()

   useEffect(()=>{
    console.log(h1Ref.current)
   })
    const handleStart=()=>{

        timeId.current=setInterval(()=>{
            setCount(prev=>prev-1)
        },1000)
        
    }

    const handleStop=()=>{
        clearInterval(timeId.current)
    }

    
    return (

        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>

    )
}
export default UseRef
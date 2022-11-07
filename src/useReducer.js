import { useState,useReducer } from "react";


function UseReducer(){
    // const [count,setCount]=useState(0)
    let initState=0
    // const HandleDown=()=>{
    //     setCount(count-1)
    // }
    // const HandleUp=()=>{
    //     setCount(count+1)
    // }
    const HandleDown='Down'
    const HandleUp='Up'
    const reducer=(State,action)=>{
        switch(action){
            case(HandleDown):return State-1;
            case(HandleUp):return State+1;
            default:new Error('invalid action')
        }
    }
    const [count,dispatch]=useReducer(reducer,initState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(HandleDown)}>Down</button>
            <button onClick={()=>dispatch(HandleUp)}>Up</button>
        </div>
    )
}
export default UseReducer
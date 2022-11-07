import {useState , useCallback } from "react"
import Memo from "./memo"
import UseMemo from "./useMemo"
import UseReducer from "./useReducer"
// 
function UseCallback(){

    const [count,setCount]=useState(1)
    const handleIncrease=useCallback(()=>{
        setCount(pre=>pre+1)
    },[])


    return(
        <div style={{padding:'10px 10px'}}>
            <Memo onIncrease={handleIncrease}/>
            <h1>{count}</h1>
            <UseMemo/>
            <UseReducer/>
        </div>
    )
}
export default UseCallback

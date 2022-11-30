import {useContext,useRef} from 'react'
import context from './Context'
import {handleInput,handleadd} from './status'

function AppStore(){
    const ref=useRef('')
    const [state,dispatch]=useContext(context)
    const handleAdd=()=>{
            dispatch(handleadd(state.toDoInput))
            dispatch(handleInput(''))
            ref.current.focus()
    }
    return (
        <div>
            <input
                ref={ref}
                value={state.toDoInput}
                placeholder="Enter todo ...."
                onChange={(e)=>{
                    dispatch(handleInput(e.target.value))
                }}
            />
             <button
               onClick={handleAdd} >Add
            </button>
             <ul>
                {state.toDo.map((todo,index) => (
                    <li key={index}>{todo}</li>
                ))}
             </ul>
    
        </div>
    ) 
}

export default AppStore
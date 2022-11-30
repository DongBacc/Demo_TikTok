import { SET_TODO,ADD_TODO } from "./store"

export const handleInput=(payload)=>{
    return (
        {
            type:SET_TODO,
            payload
        }
    )
}
export const handleadd=(payload)=>{
    return{
        type:ADD_TODO,
        payload
    }
}
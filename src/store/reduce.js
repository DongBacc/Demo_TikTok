import { SET_TODO,ADD_TODO } from "./store"

const innitState={
    toDo:[],
    toDoInput:''
}

const reducer=(state,action)=>{
    switch(action.type){
        case SET_TODO:
            return{
                ...state,
                toDoInput:action.payload
            }
        case ADD_TODO:
            return{
                ...state,
                toDo:[...state.toDo,action.payload]
            }
        default:
            throw new Error('invalid action')
    }
}
export {innitState,reducer}


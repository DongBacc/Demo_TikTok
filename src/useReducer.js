import { useState,useReducer,useRef } from "react";

const initState = {
    job: '',
    jobs: []
}
const SET_JOB = 'set_job';
const ADD_JOBS = 'add_jobs';
const DELETE_JOBS = 'delete_jobs';
const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOBS,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOBS,
        payload
    }
}
let newState;
const reducer = (state, action) => {
   switch(action.type){
        case SET_JOB:
            return{
                ...state,
                job:action.payload
            }
        break
        case ADD_JOBS:
            return{
                ...state,
                jobs:[...state.jobs,action.payload]
            }
        break
        case DELETE_JOBS:
            const newJob=[...state.jobs]
            newJob.splice(action.payload,1)
            return{
                ...state,
                jobs:newJob
            }
        break
        default:new Error('invalid action')    
   }
    
   
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;
    const ipRef = useRef()
    const handleAddJob=()=>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        ipRef.current.focus()
    }
    return (
        <div>
            <input value={job} type='text'
                ref={ipRef}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }} />
            <button type='button' onClick={handleAddJob}>ADD</button>
            {jobs.map((job, index) => (
                <li key={index}>{job}
                    <span onClick={() => dispatch(deleteJob(index))}>   x</span>
                </li>
            ))}
        </div>
    );
};

export default UseReducer
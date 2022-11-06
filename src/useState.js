
import { useState } from 'react'


function UseState() {
  const store=JSON.parse(localStorage.getItem('jobs'))
  const [job,setJob]=useState('')
  const[jobs,setJobs]=useState(store??[])
 
  const handleSumit=()=>{
    return(
      setJobs(prev=>{
        const newjobs=[...prev,job]
        localStorage.setItem('jobs',JSON.stringify(newjobs))
        return store
      }),
      setJob('')
    )
  }
  return (
    <div className="App" style={{padding:20}}>
      <input 
        value={job}
        onChange={(e)=>setJob(e.target.value)}
      />
      <button onClick={handleSumit}>click</button>
      <ul>
        {jobs.map((job,i)=>(
          <li key={i}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseState;
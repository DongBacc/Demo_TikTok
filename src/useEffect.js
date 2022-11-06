import { type } from "@testing-library/user-event/dist/type";
import { useEffect ,useState} from "react";

    //1useEffect(callback,)
    //gọi callback mỗi khi component re-render
    //--goị callback sau khi component vao DOM
    //2useEffect(callback,[])
    //--chỉ gọi callback 1 lần sau khi component mounted
    //3useEffect(callback,[degs])
    //--callback goij laij moij khi des thay ddooir
function Content(){
  const tabs=['posts','comments','albums','photos','todos','users']
  const[titles,setTitle]=useState([])
  const[type,setType]=useState('posts')
  const[top,setTop]=useState(false)
  const[countDown,setCountDown]=useState(180)
  const lessons=[
    {
      id:1,
      name:'ReactJS là gì? Tại sao nên học ReactJS ?'
    },
    {
      id:2,
      name:'SPA/MPA là gì?'
    },
    {
      id:3,
      name:'Arrrow function'
    }
  ]
  const[lessonId,setLessonId]=useState(1)
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res=>res.json())
      .then(result=>setTitle(result))
  },[type])

  useEffect(()=>{
    window.addEventListener('scroll',()=>((window.scrollY>=200)?setTop(true):setTop(false)))

    //Cleanup function
    // return()=>{
    //   window.removeEventListener('scroll')
    // }
  },[])

  useEffect(()=>{
    const countTime=setInterval(()=>{
      setCountDown(prev=>prev-1)
    },1000)
    return()=>clearInterval(countTime)
  },[])
  
  useEffect(()=>{

    const handleComment=(e)=>{
        console.log(e.detail)
    }

    window.addEventListener(`lesson-${lessonId}`,handleComment)
    return()=>{
      window.removeEventListener(`lesson-${lessonId}`,handleComment)
    }
  },[lessonId])
    return(
        <div>

            <ul>
              {
                lessons.map((lesson)=>(
                  <li
                      key={lesson.id}
                     style={lesson.id===lessonId?{
                      color:'red'
                     }:{}} 
                     onClick={()=>setLessonId(lesson.id)}
                  >
                    {lesson.name}
                  </li>
                ))
              }
            </ul>

            <h1>{countDown}</h1>

            {tabs.map(tab=>(
              <button 
                key={tab}
                style={
                  tab===type?{
                    color:'#fff',
                    backgroundColor:'#333'
                  }:{
                    cursor:'pointer'
                  }
                }
                onClick={()=>setType(tab)}
              >
                {tab}
              </button>
            ))}
           <ul>
            {titles.map(title=>(
                <li key={title.id}>{title.title||title.name}</li>
              ))}
           </ul>

           {top&&
            <button
              style={{
                position:'fixed',
                bottom:'20px',
                right:'10px'
              }}
            >
              go to top
            </button>
           }
        </div>
        

    )
}

export default Content
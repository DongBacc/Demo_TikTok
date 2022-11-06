import { useState,useMemo,useEffect} from "react";
//so sánh giữa useEffect và useMemo
//useEffect không trả về gì khác ngoài hàm dọn dẹp
//useaMemo trả về một function
function UseMemo(){
    const [name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[products,setProducts]=useState([])

    const handleAdd=()=>{
        setProducts([...products,{
            name,
            price:parseInt(price)
        }])
        setName('')
        setPrice('')
    }
    
    const totals=useMemo(()=>{
        const result=products.reduce((total,current)=>{
            console.log('kk')
            return(
                total+current.price
            )
           
        },0)
        return result
    },[products])
    return(

       <div>
        <input
            value={name}
            placeholder='Enter name...'
            onChange={(e)=>setName(e.target.value)}
       />
       <br/>
       <input
            value={price}
            placeholder='Enter price ...'
            onChange={(e)=>setPrice(e.target.value)}
       />
       <br/>
       <button
            onClick={handleAdd}
       >
            Add
        </button>
        <br/>
       Total:{totals}
       <ul>
            { products.map((product,i)=>(
                <li key={i}>{product.name}-{product.price}</li>
            ))}
        </ul>
       </div>
    )
}
export default UseMemo
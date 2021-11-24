import React, { useEffect, useState } from 'react'
import './post.css'

export default function Post(props) {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((resp)=>{
            resp.json().then((result)=>{
                console.log(result);
                setUser(result)
            })
        })
    },[])
    
    return (
        <>
        <h1 className="text-center">Latest Updates...</h1>
        
            <button onClick={()=>props.logout()}>logout</button>
        <div class="container">
            {user.map((item,i)=>{
                return(
               <div class="card " key={i}>
            <div class="card-body text-center">
                    <h2>{item.id}</h2>
              <h5 class="card-title"> <span>Title :</span> {item.title}</h5>
              <p class="card-text"><span>Body :</span> {item.body}</p>
            </div>
          </div> 
            )})}
        
        
       
    </div>
    </>
    )
}



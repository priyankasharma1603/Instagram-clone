import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import M from 'materialize-css'
const Signup=()=>{
   const navigate=useNavigate();
   const [name,setName] =useState("")
   const [password,setPassword] =useState("")
   const [email,setEmail] =useState("")
   const PostData=()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
         return
      
      }
      fetch("/signup",{
         method:"post",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name,
            password,
            email
         })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
            M.toast({html:data.error,classes:"#c62828 red darken-3"})
            return
         }
         else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            M.toast({html:data.message,classes:"#689f38 light-green darken-2   "})
            navigate('/signin')
         }
      }).catch(err=>{
         console.log(err)
      })
   
   }

    return(
        
        <div className="mycard">
        <div className="card auth-card input-field" style={{height:"430px"}}>
        <h2>Instagram</h2>
        <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button class="btn #1e88e5 blue darken-1 " onClick={()=>PostData()} style={{borderRadius:"6px"}} type="submit" >
        Signup
       
     </button>
     <h5 style={{fontFamily:"sans-serif",fontSize:"1.2rem"}}>
     Already have an account? <Link to="/signin">signin</Link>
        
     </h5>
 
        </div>
      </div>
        )
}
export default Signup
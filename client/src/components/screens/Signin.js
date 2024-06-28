import React, {useState,useContext} from "react";
import {Link,useNavigate} from 'react-router-dom';
import {UserContext} from '../../App'


import M from 'materialize-css';

const Signin=()=>{
   const {state,dispatch}=useContext(UserContext)
   const navigate=useNavigate();
   const [password,setPassword] =useState("")
   const [email,setEmail] =useState("")
   const PostData=()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
         return
      
      }
      fetch("/signin",{
         method:"post",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            password,
            email
         })
      }).then(res=>res.json())
      .then(data=>{
         console.log(data)
        if(data.error){
            M.toast({html:data.error,classes:"#c62828 red darken-3"})
         }
         else{
            localStorage.setItem("jwt",data.token )
            localStorage.setItem("user",JSON.stringify(data.user ))
            dispatch({type:"USER",payload:data.user})
            M.toast({html:"Signedin Successfully",classes:"#689f38 light-green darken-2   "})
            navigate('/')
         }
      }).catch(err=>{
         console.log(err)
      })
   
   }
    return(
        <div className="mycard">
        <div className="card auth-card input-field" style={{height:"380px"}}>
        <h2>Instagram</h2>
        <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn #1e88e5 blue darken-1 " style={{borderRadius:"6px"}} type="submit" name="action"
         onClick={()=>PostData()}>
        Log in 
     </button>

     <h2 style={{fontFamily:"sans-serif",fontSize:"0.9rem",textAlign:"center",color:"darkblue",margin:"0px",fontWeight:"lighter",marginTop:"10px"}}>
     <Link to="/">Forget password?</Link>
     </h2>
     <h5  style={{fontFamily:"sans-serif",fontSize:"1rem", margin:"5px"}}>
        Don't have an account? <a href="/signup" target="_blank" >signup</a> 
     </h5>
     
       </div>
  </div>
 )
}
export default Signin


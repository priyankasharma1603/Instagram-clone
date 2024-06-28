import React ,{useState} from "react";
import M from 'materialize-css';
import {useNavigate} from 'react-router-dom'
 const CreatePost=()=>{
    const navigate=useNavigate();
    const[title,setTitile]=useState(" ")
    const[body,setBody]=useState(" ")
    const[image,setImage]=useState(" ")
    const [url,setUrl] =useState("")
    
    const postDetails =()=>{
        const data=new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","dykko1beq")
        fetch("https://api.cloudinary.com/v1_1/dykko1beq/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
        setUrl(data.url) 
    })
    .catch(err=>{
        console.log(err)
    })
    
    fetch("/createpost",{
        method:"post",
        headers:{
           "Content-Type":"application/json",
           "Authorization":"Bearer " +localStorage.getItem("jwt")
        },
        body:JSON.stringify({
           title,
           body,
           pic:url
        })
     }).then(res=>res.json())
     .then(data=>{
    
       if(data.error){
           M.toast({html:data.error,classes:"#c62828 red darken-3"})
          
        }
        else{
           M.toast({html:"Created post successfully",classes:"#689f38 light-green darken-2   "})
           navigate('/')
        }
     }).catch(err=>{
        console.log(err)
     })
  
}
 return(
        <div className="mycard" style={{color:"black"}}>
        <div className="card auth-card input-field" style={{height:"270px", paddingTop:"15px"}}>
        <input type="text" placeholder="title" value={title} onChange={(e)=>setTitile(e.target.value)}/>
        <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <div className="file-field input-field ">
        <div className="btn #1e88e5 blue darken-1" style={{borderRadius:"6px",fontFamily:"sans-serif"}}  >
             <span>Upload Image</span>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
       </div>
       <div className="file-path-wrapper">
           <input className="file-path validate" type="text"/>
       </div>
      </div>

      <button className="btn #1e88e5 blue darken-1 " style={{borderRadius:"6px"}} type="submit" name="action"
      onClick={()=>postDetails()}
      >
      Submit post
     </button>
   </div>
</div>
   
    )
}
export default CreatePost
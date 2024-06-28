import React from "react";

const Home=()=>{
    return(
        
         <div className="home">
            <div className="card home-card">
            <h5>Priyanka Sharma</h5> 
            
                <div className="card-image">
                     <img src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"></img>
                  </div>
                 <div className="card-content">
                 <i class="material-icons" style={{color:"red"}}>favorite</i>
                 <i class="material-icons" style={{color:"black"}}>share</i>

                 <h6>title</h6>
                 <p>This is amazing post</p>
                 <input type="text" placeholder="add a comment" />
                </div>
            </div>
            <div className="card home-card">

                 <h5>avikya__</h5>
                <div className="card-image">
                     <img src="https://images.unsplash.com/photo-1693701598372-13486b3824fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"></img>
                  </div>
                 <div className="card-content">
                 <i class="material-icons" style={{color:"red"}}>favorite</i>
                 <i class="material-icons" style={{color:"black"}}>share</i>

                 <h6>title</h6>
                 <p>This is amazing post</p>
                 <input type="text" placeholder="add a comment" />
                </div>
            </div>
            <div className="card home-card">
            <h5>_nickielo_</h5> 
            
                <div className="card-image">
                     <img src="https://images.unsplash.com/photo-1693850286866-58b493236931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"></img>
                  </div>
                 <div className="card-content">
                 <i class="material-icons" style={{color:"red"}}>favorite</i>
                 <i class="material-icons" style={{color:"black"}}>share</i>

                 <h6>title</h6>
                 <p>Darkest day of life</p>
                 <input type="text" placeholder="add a comment" />
                </div>
            </div>
         </div> 
        )
}
export default Home
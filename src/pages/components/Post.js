
import  {useEffect, useState} from 'react';
import React from 'react'

const Post = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");

    function saveUser(){
        console.warn({name,email, mobile});
        let data={name, email,mobile}
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
           // console.warn("result", result);
           result.json().then((resp)=>{
               console.warn("resp", resp)
           })  
        })  
    }

  return (   <div className='App'>
  <div>
    <h1 style={{color:"black"}}>Post api </h1>
    <label for="fname">Name</label><br></br>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/><br/>
    <label for="fname">Email</label><br></br>
    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br/><br/>
    <label for="fname">Mobile</label><br></br>
    <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"/><br/><br/>
    <button type="buttton" onClick={saveUser}>Submit</button>
     </div></div>
  )
}

export default Post
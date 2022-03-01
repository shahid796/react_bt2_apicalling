import React, { useEffect, useState } from 'react'

function Test() {
   const[name,setname]= useState('')
   const[email,setemail]= useState('')
    useEffect(()=>{
        console.log("running test component")
         return()=>{
             console.log("unmount")
         }
    },[])
  return (
    
    <div>
        <h1>test component</h1>
        <input type="text" value={name} placeholder="enter your name" onChange={(e)=>{setname(e.target.value)}} />
        <input type="text" value={email} placeholder="enter your email id" onChange={(e)=>{setemail(e.target.value)}}/>
    </div>
  )
}

export default Test
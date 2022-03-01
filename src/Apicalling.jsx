import React, { useState } from 'react'
import axios from 'axios'

function Apicalling() {
    const[data,setdata]=useState([])
    
  return (
    <div>
        <h1>api calling</h1>
        <button onClick={()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                console.log(response.data)
                setdata(response.data)
            })
        }}>fetch data</button>
        {
            data.map((item,index)=>{
                return (
                    <div>
                        <h2>{index+1}</h2>
                    <h2>{item.title}</h2>
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default Apicalling
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Apicallinguseeffect = () => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response.data)
            setdata(response.data)
        })
    },[])
    return (
        <div>
            <h1>useeffect component</h1>
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
    );
}

export default Apicallinguseeffect;

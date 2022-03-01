import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Test from './Test';
import Apicalling from './Apicalling';
import Apicallinguseeffect from './Apicallinguseeffect';

function App() {
  const[showtest,setshowtest]=useState(true)
  //componentdidmount
  //componentdidupdate
  //componentwillunmount

  //useeffect
 
  return (
    <div >
     <h1>react app</h1>
  {showtest?<Test/>:null}
  <button onClick={()=>{setshowtest(!showtest)}}>toggle</button>
  <Apicalling></Apicalling>
  <Apicallinguseeffect></Apicallinguseeffect>
    </div>
  );
}

export default App;

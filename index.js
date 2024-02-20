import './App.css';
import React from "react";
import {useState} from "react";
import axios from "axios";

  function App() {
    const [name,setName]=useState("");
    const [age,setAge]=useState(null);

    const fetchData=()=>{
    axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setAge(res.data)});
    };
    return (
    <div className='App'>  
      <input placeholder='enter your name' onChange={(event)=>{
        setName(event.target.value)
      }}/>
      <button onClick={fetchData}>Get Age</button>
      <h1>Name : {age?.name}</h1>
      <h1>Age : {age?.age}</h1>
      <h1>Count : {age?.count}</h1>
    </div>);
  }
export default App;

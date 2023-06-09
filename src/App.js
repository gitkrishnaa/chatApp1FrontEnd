
import React,{useState} from "react"
import './App.css';
import Header1 from "./component/header/header.jsx"
import Login from "./component/login/login.jsx"
import SignUp from "./component/signup/signUp.jsx"

import {Routes,Route} from "react-router-dom"
import Home from "./component/home/home.jsx"

function App() {
  let [component,setComponent]=useState("home")
const alertFun=(x)=>{
  alert(x)
  setComponent=x
}

  return (
    <div className="App2">
    
      <Header1 data={alertFun}/>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signUp" element={<SignUp/>} />


    </Routes>




    </div>
  );
}

export default App;

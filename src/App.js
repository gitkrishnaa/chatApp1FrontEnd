
import React,{useState} from "react"
import './App.css';
import Header1 from "./component/header/header.jsx"
import Login from "./component/login/login.jsx"
import SignUp from "./component/signup/signUp.jsx"
import Dashboard from "./component/dashboard/main.jsx"
import Try from "./component/try/main.jsx"


import {Routes,Route,redirect,useNavigate} from "react-router-dom"
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
<Route path="/contact" element={<h2>contact</h2>} />
<Route path="/about" element={<h2>about</h2>} />

<Route path="/login/*" element={<Login/>} />
<Route path="/signUp" element={<SignUp/>} />
<Route path="/try" element={<Try/>} />
{/* <Route path="/dashboard" element={<Dashboard/>} /> */}

    </Routes>




    </div>
  );
}

export default App;

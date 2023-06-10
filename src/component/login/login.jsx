
import "./login.css"
import { useState } from "react"
import axios from 'axios';
import {Routes,Route,redirect,useNavigate,Navigate} from "react-router-dom"



function App() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("a@b.c")
    const [password,setPassword]=useState("123")
    const [response,setResposne]=useState("message")
        const SubmitFun=async()=>{
       
            try {
            const resp2= await axios.post("http://localhost:4000/user/login",{
            user_email:email,
            user_password:password,  
            })
            console.log(resp2)
            // alert(resp2.data.message)
            
            alert("redirect to dashboard")

           const respObject=resp2.data
//setting jwt key in
const jwtKey=respObject.jwtKey;
localStorage.setItem("jwtKey",jwtKey)
localStorage.setItem("user_name",respObject.user_name)
console.log(jwtKey)

        if(resp2.data.status){
      
            navigate("/dashboard")

            //not worked
            // <Navigate to="/dashboard" replace={true} />
            // <redirect to="dashboard"/>
          
        }



        }
     catch (error) {
        alert("front end error ,see in console")
        console.log("errot i login-",error)
    }
}
    return (
<div className="div_main">
<div className="div1">
   <h4>{response}</h4>
   
    <div  className="input_div"> <input type="text"  placeholder="Email" value={email} onChange={(e)=>{
setEmail(e.target.value)
    }}/>  </div>

    <div className="input_div"> <input type="password" placeholder="Password"  value={password} onChange={(e)=>{
setPassword(e.target.value)}}/>  </div>
    
<div className="input_div">
    <button className="button1" onClick={SubmitFun}> submit</button>
    </div>
</div>

</div>

    )


}
export default App;

import "./login.css"
import { useState } from "react"
import axios from 'axios';
function App() {
    const [email,setEmail]=useState("a@b.c")
    const [password,setPassword]=useState("123")
        const submitFun=async()=>{
       
            try {
            const resp2= await axios.post("http://localhost:4000/user/login",{
            user_email:email,
            user_password:password,  
            })
            console.log(resp2)
            alert(resp2.data.message)
        }
     catch (error) {
        alert("front end error ,see in console")
        console.log("errot i login-",error)
    }
}
    return (
<div className="div_main">
<div className="div1">
   
   
    <div  className="input_div"> <input type="text"  placeholder="Email" value={email} onChange={(e)=>{
setEmail(e.target.value)
    }}/>  </div>

    <div className="input_div"> <input type="password" placeholder="Password"  value={password} onChange={(e)=>{
password(e.target.value)}}/>  </div>
    
<div className="input_div">
    <button className="button1" onClick={submitFun}> submit</button>
    </div>
</div>
</div>

    )


}
export default App;
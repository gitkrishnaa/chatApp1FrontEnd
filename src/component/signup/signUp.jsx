
import "./signUp.css"
import axios from "axios"
const {useState}=require("react")
function App() {
    const [name,setName]=useState("Krishna")
    const [email,setEmail]=useState("a@b.c")
    const [password,setPassword]=useState("123")
    const [mobile,setMobile]=useState(1234567890)


    const submitFun=async()=>{
       

        const resp2= await axios.post("http://localhost:4000/user/signup",{
            user_name:name,
            user_email:email,
            user_password:password,
            user_mobile:mobile

        })
        console.log(resp2)
        alert(resp2.data.message)
    }
    return (
<div className="div_main">
<div className="div1">
   
<div  className="input_div"> <input type="text" value={name} onChange={(e)=>{
setName(e.target.value);

}}  placeholder="Name"/>  </div>

<div  className="input_div"> <input type="number" value={mobile} onChange={(e)=>{
setMobile(e.target.value);

}}  placeholder="Mobile No."/>  </div>

    <div  className="input_div"> <input type="text"  placeholder="Email" value={email} onChange={(e)=>{
setEmail(e.target.value);

}}  />  </div>

    <div className="input_div"> <input type="password" placeholder="Password" value={password} onChange={(e)=>{
setPassword(e.target.value);

}}  />  </div>
    
<div className="input_div">
    <button className="button1" onClick={submitFun}>submit</button>
    </div>
</div>
</div>

    )


}
export default App;
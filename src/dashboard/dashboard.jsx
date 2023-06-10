import Header from "./componenet/header/main";
import Body from "./componenet/body/main";
import Chat from "./componenet/chat/main";

import {Routes,Route,redirect,useNavigate} from "react-router-dom";



function dashboard(params) {

const name_from_localstorage=localStorage.getItem("user_name")

const jwtKey_from_localstorage=localStorage.getItem("jwtKey")

console.log(name_from_localstorage)
console.log(jwtKey_from_localstorage)
 if(jwtKey_from_localstorage==null){
    alert("you are logout ,please login")
 }



    return(
<div>
<Header name={name_from_localstorage}/>
  
   <Routes>
<Route path="/" element={ <Body/>} />
<Route path="/chat" element={<Chat/>} />
{/* <Route path="/about" element={<h2>about</h2>} /> */}

{/* <Route path="/login/*" element={<Login/>} />
<Route path="/signUp" element={<SignUp/>} />
<Route path="/try" element={<Try/>} /> */}


    </Routes>
</div>




    )
}
export default dashboard;
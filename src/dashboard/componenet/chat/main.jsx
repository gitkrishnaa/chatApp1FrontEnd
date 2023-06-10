import { useNavigate } from "react-router-dom";
// import {Routes,Route,redirect} from "react-router-dom"
import "./main.css"
function Chat(params) {
    const navigate=useNavigate()

const chat=()=>{
    if(true){
   navigate("chat")
    }

}

    return(
        <div>

<div className="outer_div">
<div className="div_main">

<div className="display_chat_div">hi</div>

<div className="chat_input_div">
    
<input type="text" className="chat_input1"/>
<button className="chat_btn1">send</button>

</div>



</div>


</div>



        </div>
    )
}
export default Chat;
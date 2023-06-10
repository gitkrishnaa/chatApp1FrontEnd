import { useNavigate } from "react-router-dom";
// import {Routes,Route,redirect,useNavigate} from "react-router-dom"

function Body(params) {
    const navigate=useNavigate()

const chat=()=>{
    if(true){
   navigate("chat")
    }

}

    return(
        <div>


<div className="div_main">


<button onClick={chat}>Chat</button>


</div>


        </div>
    )
}
export default Body;
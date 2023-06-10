import Header from "./componenet/header/main"

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
<div>
    <h3>hi {name_from_localstorage}</h3>
 
    
    </div>    

</div>




    )
}
export default dashboard;
import "./main.css";
import {Link} from "react-router-dom"
// import app1 from "./component/header.js"

function App(props) {


function logout(params) {
    localStorage.removeItem("jwtKey")
    localStorage.removeItem("user_name")
}


  return (
    <div className="App">
      <div className="title">
        <h1>ChatApp</h1>
      </div>
      <div className="menu">
        <div><Link to="">Home</Link> </div>
        <div><Link to="about">About</Link> </div>
        <div><Link to="contact">Contact</Link> </div>
      </div>
      <div className="login">
        <div ><Link to="/home">
          <button className="login_btn" onClick={logout}>
            logout</button>
          </Link>
          <div className="user_data_div"><h3>hello {props.name}</h3></div>
        </div>
        
      </div>
    </div>
  );
}

export default App;

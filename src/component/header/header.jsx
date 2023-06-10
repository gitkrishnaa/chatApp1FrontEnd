import "./header.css";
import {Link} from "react-router-dom"
// import app1 from "./component/header.js"

function App(props) {
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
        <div ><Link to="login">
          <button className="login_btn">
            login</button>
          </Link>
        </div>
        <div ><Link to="signUp">
          <button className="login_btn">
            sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

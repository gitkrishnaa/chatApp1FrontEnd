// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// const navigate = useNavigate();
// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   const [authenticated, setauthenticated] = useState(
//     localStorage.getItem(localStorage.getItem("authenticated") || false)
//   );
//   const users = [{ username: "Jane", password: "testpassword" }];
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const account = users.find((user) => user.username === username);
//     if (account && account.password === password) {
//       localStorage.setItem("authenticated", true);
//       navigate("/dashboard");
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//  <input
//  type="text"
//  name="Username"
//  value={username}
//  onChange={(e) => setusername(e.target.value)}
//  />
//  <input
//  type="password"
//  name="Password"
//  onChange={(e) => setpassword(e.target.value)}
//  />
//  <input type="submit" value="Submit" />
//  </form>
//     </div>
//   );
// };
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
alert("hi")
  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default HomeButton;
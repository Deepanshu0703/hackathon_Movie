import React, { useState } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../pages/context";
import "./login.css";
function Login() {
  // const [isLogin, setIsLogin] = useState(true);
  const loginctx=useContext(LoginContext);
  const [password,setPassword]=useState("");
  const[email,setEmail]=useState("");
   const navigate=useNavigate();
  const emails =(e)=>{
    setEmail(e.target.value);
  }
  const passwords = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    }
    fetch("http://localhost:80/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        if (resp) {
          localStorage.setItem("userid", resp._id);
          localStorage.setItem( "userisAdmin",resp.isAdmin);
          localStorage.setItem("token", resp.accessToken);
          navigate('/movies');
        }
        else {
          alert("Something went wrong");
          console.log("gadbad hogayi");
          navigate("/loginpage")
        }
      })
    })
  }
  

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="hi form-signin">
        <input
          type="email"
          name="email"
          placeholder="Email asli "
          value={email}
          onChange={emails}
          required
          className="form-control"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={passwords}
          required
        />
        
        <button type="submit"> Login</button>
      </form>
      <p>
        Don't have an account?
        <Link to="/Register" onClick={
          ()=>{
            loginctx.setLogin();
            
          }}>
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;

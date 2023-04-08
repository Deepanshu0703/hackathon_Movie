import React, { useState } from "react";
import "./registration.css";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {LoginContextProvider} from "../pages/context";



function Registration() {

  // const [isLogin, setIsLogin] = useState(true);
  const loginctx = useContext(LoginContextProvider);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setotp] = useState();
  const [id,setId]=useState();
  const navigate = useNavigate();
  const names = (event) => {
    setName(event.target.value);
  }
  const emails = (event) => {
    setEmail(event.target.value);
  }
  const passwords = (event) => {
    setPassword(event.target.value);
  }
  const cpasswords = (event) => {
    setCpassword(event.target.value);
  }
 const otps=(event)=>{
  setotp(event.target.value);
 }

  const Submit = (event) => {
    if (password !== cpassword) {
      alert("passwords are not matching");
      navigate("/");
    }
    if (password.length < 8) {
      alert("password must be of 8 characters");
      navigate("/");
    }

    event.preventDefault();
    const data = {
      username: name,
      email: email,
      password: password,
    }
    fetch("http://localhost:80/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        if (resp) {
          setId(resp._id);
          setShowOtp(true);
        }
        else {
          alert("Something went wrong");
          navigate("/");
        }
      })
    })
  }


  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    const data = {
      toOtp:otp,
    }
    fetch("http://localhost:80/api/auth/verify/"+id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        if (resp==="ok") {
          console.log(resp);
        }
        else {
          alert("Something went wrong");
          navigate("/");
        }
      })
    })
  };
  return (
    <div className="registration-container">
      <h1>Register</h1>
      <form onSubmit={Submit} className="hi">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={names}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={emails}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password asli"
          value={password}
          onChange={passwords}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={cpassword}
          onChange={cpasswords}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {showOtp && (
        <form onSubmit={handleOTPSubmit} className="hi">
          <input
            type="text"
            name="OTP"
            placeholder="Enter OTP sent to your email"
            value={otp}
            onChange={otps}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      <p>
        Already have an account?
        <Link to="#" onClick={
          () => {
            loginctx.setLogin();
            // navigate("/login");
          }
        }>
          Login
        </Link>
      </p>
    </div>
  );
}
export default Registration;
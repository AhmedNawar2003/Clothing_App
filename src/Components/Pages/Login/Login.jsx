import { useState } from "react";
import "./login.css";
import Switchers from "../../Switch_log/Switchers";
import { Link, useNavigate } from "react-router-dom";

export default function Login({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login successful!");
      // Redirect or set user as logged in
      localStorage.setItem("isLoggedIn", "true");
      Navigate ("/"); // Example redirection
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div className="container">
        <Switchers />
        <div className="row logIn">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingemail"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingemail">Email Address *</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password *</label>
          </div>
          <button className="col-sm-12 col-5 logBtn" onClick={handleLogin}>
            Log In
          </button>
          <div className="col-sm-12 col-10 toRegister">
            <p>
              No account yet? <Link to="register">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

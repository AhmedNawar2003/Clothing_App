import { useState } from "react";
import "./login.css";
import Switchers from "../../Switch_log/Switchers";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login successful!");

      // Update the application state
      setUser(storedUser);

      // Persist login state
      localStorage.setItem("isLoggedIn", "true");

      // Navigate to the homepage
      Navigate("/");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login Page" />
          <meta property="og:title" content="Login" />
          <meta property="og:description" content="Login Page" />
        </Helmet>
      </HelmetProvider>
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

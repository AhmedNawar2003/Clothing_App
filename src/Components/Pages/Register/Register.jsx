import { useState } from "react";
import "./Register.css";
import Switchers from "../../Switch_log/Switchers";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Register({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const Navigate = useNavigate();

  const handleRegister = () => {
    // Validate inputs
    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Create user object
    const user = {
      username,
      email,
      password,
    };

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    Navigate("/login");
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register</title>
          <meta name="description" content="Register Page" />
          <meta property="og:title" content="Register" />
          <meta property="og:description" content="Register Page" />
        </Helmet>
      </HelmetProvider>
      <div className="container">
        <Switchers />
        <div className="row register">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingEmail">Email Address *</label>
          </div>
          <div className="form-floating mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password *</label>
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "20px",
                top: "15px",
                userSelect: "none",
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="col-sm-12 col-10">
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <button className="col-sm-12 col-10 regBtn" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}

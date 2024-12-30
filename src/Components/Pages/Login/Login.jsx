import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email.trim());
  };

  const handleLogin = () => {
    setMessage(""); // Reset message
    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      setMessage("No user found. Please register first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      setMessage("Login successful!");
      setUser(storedUser);
      localStorage.setItem("isLoggedIn", "true");
      Navigate("/");
    } else {
      setMessage("Invalid email or password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login Page" />
        </Helmet>
      </HelmetProvider>
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card cardLogin">
                <h2>Login</h2>
                <p>Please login below account detail</p>
                {message && <p className="error-message">{message}</p>}
                <div className="my-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="log_email"
                    placeholder="email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="log_password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                    id="log_showPassword"
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
                <div className="my-3">
                  <button className="signIn" id="login" onClick={handleLogin}>
                    Sign In
                  </button>
                </div>
                <Link to="/resetPassword" className="forget">
                  Forget your password?
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <h6>Don't have an account?</h6>
                <div className="my-3">
                  <Link to="/register" className="createAccount">
                    Create Account
                  </Link>
                </div>
                <p>Terms & Conditions</p>
                <p className="paragraph">
                  Your privacy and security are important to us. For more
                  information on how we use your data, read our
                </p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

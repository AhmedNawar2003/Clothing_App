import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Register({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const handleRegister = () => {
    // Validate inputs
    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[a-zA-Z0-9]{3,}$/.test(username)) {
      alert(
        "Username must be at least 3 characters long and contain only letters and numbers."
      );
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
    const user = { username, email, password };

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    Navigate("/login");
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
      <section className="register">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card cardRegister">
                <h2>Register</h2>
                <p>Please register below account detail</p>
                <div className="my-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="Reg_email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="my-3 password">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="Reg_password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className={`fa-regular ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                    id="showReg_password"
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
                <div className="my-3">
                  <button
                    className="signIn"
                    id="register"
                    onClick={handleRegister}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <h6>Already an account holder?</h6>
                <div className="my-3">
                  <Link to="/login" className="createAccount">
                    Log in
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

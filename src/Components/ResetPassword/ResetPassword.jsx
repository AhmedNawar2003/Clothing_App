import { useState } from "react";
import "./ResetPassword.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email.trim());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleResetPassword = () => {
    setMessage(""); // Reset message

    if (!email || !newPassword || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(newPassword)) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.email !== email) {
      setMessage("No user found with the provided email.");
      return;
    }

    storedUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(storedUser));
    setMessage("Password reset successful! Redirecting to login...");
    setTimeout(() => Navigate("/login"), 2000);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Reset Password</title>
          <meta name="description" content="Reset Password Page" />
        </Helmet>
      </HelmetProvider>
      <section className="resetPassword">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-8">
              <div className="card cardReset">
                <h2>Reset Password</h2>
                <p>Please enter your email and new password below.</p>
                {message && <p className="error-message">{message}</p>}
                <div className="my-3">
                  <label htmlFor="reset_email">Email Address</label>
                  <input
                    type="email"
                    id="reset_email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="my-3 password">
                  <label htmlFor="new_password">New Password</label>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="new_password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <i
                    id="reset_showPasswordNew"
                    className={`fa-regular ${
                      showNewPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  ></i>
                </div>
                <div className="my-3 password">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm_password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <i
                    id="reset_showPasswordConfirm"
                    className={`fa-regular ${
                      showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  ></i>
                </div>
                <div className="my-3">
                  <button
                    className="submit"
                    id="reset_button"
                    onClick={handleResetPassword}
                  >
                    Reset Password
                  </button>
                </div>
                <div className="my-3">
                  <Link to="/login" className="signIn">
                    Go To Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

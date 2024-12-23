import  "./Navbar.css";
import logo from "../../assets/image/logo.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      if (window.scrollY > 500) {
        header.classList.add("header-fixed");
      } else {
        header.classList.remove("header-fixed");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="header" id="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="icons">
                <li>
                  <span>
                    <i className="fa-brands fa-searchengin"></i>
                  </span>
                </li>
                <li>
                  <Link to="login">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="wishlist">
                    <span>
                      <i className="fa-regular fa-heart"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="cart">
                    <span>
                      <i className="fa-solid fa-shopping-cart"></i>
                    </span>
                  </Link>
                </li>
                <Link to="register">
                  <button className="SignUP">SignUp</button>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

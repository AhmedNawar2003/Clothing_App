import "./Navbar.css";
import logo from "../../assets/image/logo.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../CartContext/CartContext.jsx";
import { useWishlist } from "../WishlistContext/WishlistContext.jsx";

export default function Navbar({ user, setUser }) {
  const [activeLink, setActiveLink] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [products, setProducts] = useState([]); // State to hold all products
  const [showSearchPopup, setShowSearchPopup] = useState(false); // State to toggle search popup
  const location = useLocation();
  const Navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  // Track active link based on location
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Add fixed header class on scroll
  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      if (window.scrollY > 500) {
        header.classList.add("header-fixed");
      } else {
        header.classList.remove("header-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    Navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (searchTerm.trim()) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by description as well
      );
      setSearchResults(results);
    } else {
      setSearchResults([]); // If searchTerm is empty, clear results
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e); // Trigger search on Enter key press
    }
  };

  const toggleSearchPopup = () => {
    setShowSearchPopup((prev) => !prev); // Toggle search popup visibility
  };

  const closeSearchPopup = () => {
    setShowSearchPopup(false); // Close the search popup
  };

  return (
    <header className="headerNav" id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {user && (
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activeLink === "/shop" ? "active" : ""}`}
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activeLink === "/blog" ? "active" : ""}`}
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activeLink === "/contact" ? "active" : ""}`}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
            <ul className="icons">
              <li className="nav-item name">
                <span className="nav-link name">
                  {user ? `Welcome, ${user.username}` : "Guest"}
                </span>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to="login">
                      <span>
                        <i className="fa-solid fa-user"></i>
                      </span>
                    </Link>
                  </li>
                  <Link to="register">
                    <button className="SignUP">SignUp</button>
                  </Link>
                </>
              )}
              {user && (
                <>
                  <li>
                    <span
                      className="search-icon"
                      onClick={toggleSearchPopup} // Open search popup
                    >
                      <i className="fa-brands fa-searchengin"></i>
                    </span>
                  </li>
                  <li>
                    <Link to="wishlist">
                      <span className="spanCircle wishlistSpan">
                        {wishlistItems.length || 0}
                      </span>
                      <span className="spanIcon">
                        <i className="fa-regular fa-heart"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="cart">
                      <span className="spanCircle cartSpan">
                        {cartItems?.length || 0}
                      </span>
                      <span className="spanIcon">
                        <i className="fa-solid fa-shopping-cart"></i>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <span
                      className="nav-link logout-icon"
                      onClick={handleLogout}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Popup */}
      {showSearchPopup && (
        <div className="search-popup">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress} // Trigger search on Enter key press
            />
            <button type="submit">
              <i className="fa-brands fa-searchengin"></i>
            </button>
            <button type="button" className="close-btn" onClick={closeSearchPopup}>
              <i className="fa-solid fa-times"></i>
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

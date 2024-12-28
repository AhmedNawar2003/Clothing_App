import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.webp";
import "./Footer.css";
export default function Logo() {
  return (
    <>
        <div className="col-xl col-lg-3 col-md-4">
          <div className="card">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="text-content">
              <p>
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </p>
              <div className="mb-2 saleFooter">sale@uomo.com</div>
              <div className="mb-2 saleFooter">+1 246-345-0695</div>
              <div className="social-links">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-pinterest"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

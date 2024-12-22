import "./Tshirts.css";
import banner1 from "../../../../assets/image/banner_1.jpg";
import banner2 from "../../../../assets/image/banner_2.jpg";
import { Link } from "react-router-dom";
export default function Tshirts() {
  return (
    <>
      <section className="T-shirts">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="image">
                  <img src={banner1} alt="banner1" />
                </div>
                <div className="content white-text">
                  <h6>Starting At $19</h6>
                  <h2>Women&apos;s T-Shirts</h2>
                  <Link className="link" to="">
                    shop now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="image">
                  <img src={banner2} alt="banner2" />
                </div>
                <div className="content">
                  <h6>Starting At $39</h6>
                  <h2>Men&apos;s Sportswear</h2>
                  <Link className="link" to="">
                    shop now
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

import { Link } from "react-router-dom";
import character1 from "../../../../assets/image/slideshow-character1.webp";
import character2 from "../../../../assets/image/slideshow-character2.webp";
import "./Summer.css";
import "../HomeResponsive.css";
export default function Summer() {
  return (
    <>
      <section className="summer">
        <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="card text">
                    <h6>
                      <span className="red-line"></span>New Trend
                    </h6>
                    <h2>
                      <div>Summer Sale Stylish</div>
                      <div className="women">WOMENS</div>
                    </h2>
                    <Link className="link" to="">
                      Discover More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card">
                    <div className="card-img">
                      <img src={character1} alt="character1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="card text">
                    <h6>
                      <span className="red-line"></span>Summer 2020
                    </h6>
                    <h2>
                      <div>Hello New Season</div>
                      <div className="limitTime">
                        Limited Time Offer - Up to 60% off & Free Shipping
                      </div>
                    </h2>
                    <Link className="link" to="">
                      Discover More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card align-items-center">
                    <div className="card-img">
                      <img src={character2} alt="character1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true">
              {" "}
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <span className="visually-hidden"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="visually-hidden"></span>
          </button>
        </div>
      </section>
    </>
  );
}

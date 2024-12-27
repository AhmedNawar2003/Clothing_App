import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Shop.css";
import ShopProduct from "./ShopProduct";
import AOS from "aos";
import { useEffect } from "react";

export default function Shop() {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with a 800ms duration
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Shop</title>
          <meta
            name="description"
            content="Our shop offers a wide range of products"
          />
          <meta property="og:title" content="Shop" />
          <meta
            property="og:description"
            content="Our shop offers a wide range of products"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.graduateproject.com/shop"
          />
        </Helmet>
      </HelmetProvider>

      <section>
        <div className="header" data-aos="fade-down">
          <div className="img" data-aos="zoom-in">
            <div className="inside" data-aos="fade-up">
              <h1>Jakets & Coats</h1>
              <button className="btn" data-aos="flip-left">
                All
              </button>
              <button className="btn" data-aos="flip-right">
                StayHome
              </button>
              <button className="btn" data-aos="flip-up">
                Jackets
              </button>
              <button className="btn" data-aos="flip-down">
                Hoodies
              </button>
              <button className="btn" data-aos="fade-left">
                Men
              </button>
              <button className="btn" data-aos="fade-right">
                Women
              </button>
              <button className="btn" data-aos="zoom-in">
                Accessories
              </button>
              <button className="btn" data-aos="zoom-out">
                Shoes
              </button>
            </div>
            <img src="img/image (44).webp" alt="" data-aos="fade-in" />
          </div>
        </div>
        <div data-aos="fade-up">
          <ShopProduct />
        </div>
      </section>
    </>
  );
}

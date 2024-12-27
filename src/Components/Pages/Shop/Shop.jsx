import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Shop.css";
import ShopProduct from "./ShopProduct";

export default function Shop() {
  return (
    <>
      <HelmetProvider>
        <Helmet title="Shop" />
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
      </HelmetProvider>

      <section>
        <div className="header">
          <div className="img">
            <div className="inside">
              <h1>Jakets & coats</h1>
              <button className="btn">All</button>
              <button className="btn">StayHome</button>
              <button className="btn">Jackets</button>
              <button className="btn">hoodies</button>
              <button className="btn">men</button>
              <button className="btn">women</button>
              <button className="btn">Accessories</button>
              <button className="btn">Shoes</button>
            </div>
            <img src="img/image (44).webp" alt="" />
          </div>
        </div>
        <ShopProduct />
      </section>
    </>
  );
}

import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Shop.css";
import ShopProduct from "./ShopProduct";
export default function Shop() {
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
      <section className="headShop">
        <div className="container">
          <div className="col-12">
            <div className="card">
              <h2>Our Shop</h2>
            </div>
          </div>
        </div>
      </section>
      <ShopProduct/>
    </>
  );
}

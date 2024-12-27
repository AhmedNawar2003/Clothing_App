import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Shop.css";

export default function Shop() {
  // State to store fetched products
  const [products, setProducts] = useState([]);

  // Fetch products from products.json when the component mounts
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())  // Convert the response to JSON
      .then((data) => setProducts(data))    // Update state with the fetched data
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet title="Shop" />
        <meta name="description" content="Our shop offers a wide range of products" />
        <meta property="og:title" content="Shop" />
        <meta property="og:description" content="Our shop offers a wide range of products" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.graduateproject.com/shop" />
      </HelmetProvider>

      <section>
        <div className="container">
          <div className="row products">
            {products.map((product) => (
              <div key={product.id} className="col-3 item">
                <div className="img">
                  <img
                    src={product.image_1}
                    alt={product.name}
                  />
                  <button className="addtoCart">add to cart</button>
                </div>
                <div className="info">
                  <p className="tag">{product.category}</p>
                  <h5 className="name">{product.name}</h5>
                  <p className="price">${product.price}</p>
                  <div className="towishlist">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

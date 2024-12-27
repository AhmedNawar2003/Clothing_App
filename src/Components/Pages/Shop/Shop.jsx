import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';
import "./Shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter(product => product["limited-edition"] === false);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleProductClick = (product) => {
    navigate('/Details', { state: { product } });
  };

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
                <div className="img" onClick={() => handleProductClick(product)}>
                  <img className="firstImage"
                    src={product.image_1}
                    alt={product.name}
                  />
                  <img className="seccondImage"
                    src={product.image_2}
                    alt={product.name} />
                  <button className="addtoCart">add to cart</button>
                </div>
                <div className="info">
                  <p className="tag" onClick={() => handleProductClick(product)}>{product.category}</p>
                  <h5 className="name" onClick={() => handleProductClick(product)}>{product.name}</h5>
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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "./Shop.css";

export default function ShopProduct() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with a duration of 800ms
  }, []);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product["limited-edition"] === false
        );
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleProductClick = (product) => {
    navigate("/Details", { state: { product } });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row products">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-4 item"
                data-aos="fade-up"
                data-aos-delay={index * 10} // Delay for staggered animations
              >
                <div className="card m-3">
                  {product.sale && <div className="sale">SALE</div>}
                  {product.new && <div className="new">NEW</div>}

                  <div
                    className="img"
                    onClick={() => handleProductClick(product)}
                    data-aos="zoom-in"
                  >
                    <img
                      className="firstImage"
                      src={product.image_1}
                      alt={product.name}
                    />
                    <img
                      className="seccondImage"
                      src={product.image_2}
                      alt={product.name}
                    />
                    <button className="addtoCart" data-aos="fade-up">
                      Add to Cart
                    </button>
                  </div>

                  <div className="info" data-aos="fade-in">
                    <p
                      className="tag"
                      onClick={() => handleProductClick(product)}
                    >
                      {product.category}
                    </p>
                    <h5
                      className="name"
                      onClick={() => handleProductClick(product)}
                    >
                      {product.name}
                    </h5>

                    {product.sale ? (
                      <p className="price">
                        <del>${product.price}</del> ${product.disocunted_price}
                      </p>
                    ) : (
                      <p className="price">${product.price}</p>
                    )}

                    <div className="towishlist" data-aos="flip-left">
                      <i className="fa-regular fa-heart"></i>
                    </div>
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

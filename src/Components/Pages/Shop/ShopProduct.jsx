import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { useCart } from "../../CartContext/CartContext.jsx";
import "./Shop.css";

export default function ShopProduct() {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useCart();
  const navigate = useNavigate();
  const [notification, setNotification] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800 });
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

  const handleAddToCart = (product) => {
    // Check if product is already in the cart
    const productExists = cartItems.some((item) => item.id === product.id);

    if (productExists) {
      setNotification("This product is already in your cart.");
      setTimeout(() => {
        setNotification(""); // Hide the notification after 3 seconds
      }, 3000);
    } else {
      // Add product to cart if it doesn't exist
      addToCart(product);
    }
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
                data-aos-delay={index * 10}
              >
                <div className="card m-3">
                  {product.sale && <div className="sale">SALE</div>}
                  {product.new && <div className="new">NEW</div>}

                  <div className="img" data-aos="zoom-in">
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
                    <button
                      className="addtoCart"
                      data-aos="fade-up"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="info" data-aos="fade-in">
                    <p className="tag" onClick={() => handleProductClick(product)}>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
    </>
  );
}

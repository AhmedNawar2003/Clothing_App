import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../../WishlistContext/WishlistContext.jsx"; // Import WishlistContext
import { useCart } from "../../../CartContext/CartContext.jsx"; // Import CartContext
import "./Limited.css";

export default function Limited() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const navigate = useNavigate();
  const { wishlistItems, handleWishlistToggle } = useWishlist(); // Destructure from WishlistContext
  const { addToCart } = useCart(); // Destructure the addToCart function from CartContext

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((data) => {
        const limitedProducts = data.filter(
          (product) => product["limited-edition"] === true
        );
        setProducts(limitedProducts);
        setVisibleProducts(limitedProducts);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  // Carousel shifting functions
  const shiftLeft = () => {
    setVisibleProducts((prev) => {
      const shifted = [...prev];
      shifted.push(shifted.shift());
      return shifted;
    });
  };

  const shiftRight = () => {
    setVisibleProducts((prev) => {
      const shifted = [...prev];
      shifted.unshift(shifted.pop());
      return shifted;
    });
  };

  // Handle product click to navigate to details page
  const handleProductClick = (product) => {
    navigate("/Details", { state: { product } });
  };

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
  };

  return (
    <section>
      <div className="container">
        <div className="limited row">
          <div className="col-12 header">
            <h2>
              limited <span>edition</span>
            </h2>
          </div>
          <div className="row col-12 products">
            {visibleProducts.map((product, index) => (
              <div className="col-3 item" key={index}>
                <div className="img">
                  <img
                    src={product.image_1}
                    alt={product.name}
                    onClick={() => handleProductClick(product)}
                  />
                  <button
                    className="addtoCart"
                    onClick={() => handleAddToCart(product)} // Add to Cart functionality
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="info">
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
                  <p
                    className="price"
                    onClick={() => handleProductClick(product)}
                  >
                    ${product.price}
                  </p>
                  <div
                    className="towishlist"
                    onClick={() => handleWishlistToggle(product)} // Toggle Wishlist
                  >
                    <i
                      className={`fa-regular fa-heart ${
                        wishlistItems.some((item) => item.id === product.id)
                          ? "liked"
                          : ""
                      }`}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <span className="director director-right">
            <i className="fa-solid fa-chevron-right" onClick={shiftRight}></i>
          </span>
          <span className="director director-left">
            <i className="fa-solid fa-chevron-left" onClick={shiftLeft}></i>
          </span>
        </div>
      </div>
    </section>
  );
}

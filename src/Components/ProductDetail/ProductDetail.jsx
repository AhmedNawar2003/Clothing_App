import "./ProductDetail.css";
import { useLocation } from "react-router-dom";
import { useCart } from "../CartContext/CartContext"; 
import { useWishlist } from "../WishlistContext/WishlistContext"; 
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const location = useLocation();
  const { addToCart } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist(); 
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1); 
  const [isInWishlist, setIsInWishlist] = useState(false); 

  useEffect(() => {
    // Check if the product is in the wishlist
    if (wishlistItems.some((item) => item.id === product.id)) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [wishlistItems, product.id]);

  if (!product) {
    return <p>Error: Product data is not available</p>;
  }

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Include quantity when adding to cart
  };

  const handleAddToWishlist = () => {
    addToWishlist({ ...product, quantity }); // Add to wishlist with quantity
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product.id); // Remove product from wishlist
  };

  return (
    <>
      <section className="productDetail">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card productImg">
                <img
                  className="image1"
                  src={product.image_1}
                  alt={product.name}
                />
                {product.image_2 && (
                  <img
                    className="image2"
                    src={product.image_2}
                    alt={product.name}
                  />
                )}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <h1>{product.name}</h1>
                <p className="description">{product.description}</p>
                {product.sale ? (
                  <p className="price">
                    <del>${product.price}</del> ${product.discounted_price}
                  </p>
                ) : (
                  <p className="price">${product.price}</p>
                )}
                <div className="counter">
                  <button
                    className="counter-Plus btn"
                    onClick={decrementQuantity}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className="count-value">{quantity}</span>
                  <button
                    className="counter-minus btn"
                    onClick={incrementQuantity}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <button
                  className="btn addCart mb-3"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  className={`btn heart ${isInWishlist ? 'active' : ''}`}
                  onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
                >
                  <i className={`fa-regular fa-heart ${isInWishlist ? 'filled' : ''}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

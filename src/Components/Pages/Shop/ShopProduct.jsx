import { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css";
import { useCart } from "../../CartContext/CartContext"; // Import the useCart hook
import { useWishlist } from "../../WishlistContext/WishlistContext"; // Import the useWishlist hook
import { Link } from 'react-router-dom';

export default function ShopProduct() {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  const { cartItems, addToCart } = useCart(); // Cart functions
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist(); // Wishlist functions
  const [notification, setNotification] = useState("");
  
  // Reset state when navigating away from this page
  useEffect(() => {
    return () => {
      setProducts([]);
      setError(null);
    };
  }, []);
  
  // Fetch products when component mounts
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get("/products.json"); // Correct path to your JSON file
        setProducts(response.data); // Assuming response.data is an array
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  // Show loading indicator or error message
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  const handleAddToCart = (product) => {
    // Check if product is already in the cart
    const productExists = cartItems.some((item) => item.id === product.id);
    
    if (productExists) {
      setNotification("This product is already in your cart.");
      setTimeout(() => {
        setNotification(""); // Hide the notification after 3 seconds
      }, 3000);
    } else {
      // Add product to cart with quantity = 1 (default)
      addToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <>
      <section className="Shop">
        <div className="container">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="card">
                  <Link to={`/productDetail`} state={{ product }}>
                    <div className="cardShopImg">
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
                  </Link>
                  <div className="cardShopBody">
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                    {product.sale ? (
                      <p className="price">
                        <del>${product.price}</del> ${product.disocunted_price}
                      </p>
                    ) : (
                      <p className="price">${product.price}</p>
                    )}
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)} // Add to cart with quantity 1
                    >
                      Add to Cart
                    </button>
                    <span
                      className="heart"
                      onClick={() => {
                        const existingItem = wishlistItems.find(
                          (item) => item.id === product.id
                        );
                        if (existingItem) {
                          removeFromWishlist(product.id); // Remove from wishlist if exists
                        } else {
                          addToWishlist(product); // Add to wishlist if not exists
                        }
                      }}
                    >
                      {wishlistItems.some((item) => item.id === product.id) ? (
                        <i className="fa-solid fa-heart"></i>
                      ) : (
                        <i className="fa-regular fa-heart"></i>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {notification && <div className="notification">{notification}</div>}
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css";
import { useCart } from "../../CartContext/CartContext"; // Import the useCart hook
import { useWishlist } from "../../WishlistContext/WishlistContext"; // Import the useWishlist hook
import { Link } from "react-router-dom";

export default function ShopProduct() {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
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
        setFilteredProducts(response.data); // Set initial filtered products
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  // Update filtered products based on search query
  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  // Show loading indicator or error message
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      addToCart({ ...product, quantity: existingItem.quantity + 1 });
      setNotification("Item already exists in the cart, quantity updated!");
    } else {
      addToCart({ ...product, quantity: 1 });
      setNotification("Item added to cart successfully!");
    }
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <>
      <section className="Shop">
        <div className="container">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="row">
            {filteredProducts.map((product, index) => (
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
                        <del>${product.price}</del> ${product.discounted_price}
                      </p>
                    ) : (
                      <p className="price">${product.price}</p>
                    )}
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
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
                          removeFromWishlist(product.id);
                        } else {
                          addToWishlist(product);
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

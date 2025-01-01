import { useEffect, useState } from "react";
import "./OurProducts.css";
import { useCart } from "../../../CartContext/CartContext";
import { useWishlist } from "../../../WishlistContext/WishlistContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function OurProducts() {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
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

  const handleWishlistToggle = (product) => {
    const existingItem = wishlistItems.find((item) => item.id === product.id);
    if (existingItem) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Show loading indicator or error message
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <>
      <section className="ourProducts">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card ourProducts__heading">
                <h2>Our Products</h2>
              </div>
            </div>
            <div className="col-12">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {Array.from(
                    { length: Math.ceil(filteredProducts.length / 4) },
                    (_, i) => filteredProducts.slice(i * 4, i * 4 + 4)
                  ).map((productGroup, index) => (
                    <div
                      className={`carousel-item ${
                        index === 0 ? "active" : ""
                      }`}
                      key={index}
                    >
                      <div className="row">
                        {productGroup.map((product) => (
                          <div
                            key={product.id}
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                          >
                            <div className="card">
                              <Link
                                to={`/productDetail`}
                                state={{ product }}
                              >
                                <div className="cardProductImg">
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
                              <div className="cardProductBody">
                                <h3>{product.name}</h3>
                                <p className="description">
                                  {product.description}
                                </p>
                                {product.sale ? (
                                  <p className="price">
                                    <del>${product.price}</del> $
                                    {product.discounted_price}
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
                                  onClick={() => handleWishlistToggle(product)}
                                >
                                  {wishlistItems.some(
                                    (item) => item.id === product.id
                                  ) ? (
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
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  >
                     <i className="fa-solid fa-angle-left"></i>
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

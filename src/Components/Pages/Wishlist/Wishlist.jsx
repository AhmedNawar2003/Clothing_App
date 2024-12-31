import { useWishlist } from "../../WishlistContext/WishlistContext.jsx"; // Import WishlistContext
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Wishlist.css";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const {
    wishlistItems,
    updateWishlistQuantity,
    removeFromWishlist,
    clearWishlist,
    message,
  } = useWishlist(); // Use Wishlist Context

  // Function to calculate price per item
  const getItemPrice = (item) => {
    const pricePerUnit = item.disocunted_price
      ? parseFloat(item.disocunted_price)
      : parseFloat(item.price);
    return pricePerUnit * (item.quantity || 1);
  };

  // Calculate the total price for wishlist items
  const totalPrice =
    wishlistItems && wishlistItems.length > 0
      ? wishlistItems.reduce((total, item) => total + getItemPrice(item), 0)
      : 0;

  return (
    <>
      <HelmetProvider>
        <Helmet title="Wishlist" />
        <meta name="description" content="Your personalized shopping list" />
        <meta name="keywords" content="shopping list, wishlist, personalized" />
        <meta name="og:title" content="Wishlist" />
        <meta name="og:description" content="Your personalized shopping list" />
        <meta name="og:type" content="website" />
      </HelmetProvider>

      <section className="wishlist">
        {/* Success Message */}
        {message && <div className="wishlist-message">{message}</div>}

        {wishlistItems.length === 0 ? (
          <p className="text-center">
            Your wishlist is empty. Start adding some products!
          </p>
        ) : (
          <>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <h1 className="head">Your Wishlist</h1>
                  </div>
                </div>
                {wishlistItems.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <Link to={`/productDetail`} state={{ item }}>
                        <div className="cardImg">
                          <img
                            className="image1"
                            src={item.image_1}
                            alt={item.name}
                          />
                          {item.image_2 && (
                            <img
                              className="image2"
                              src={item.image_2}
                              alt={item.name}
                            />
                          )}
                        </div>
                      </Link>
                      <div className="cardBody">
                        <h3>{item.name}</h3>
                        <p>Category: {item.category}</p>
                        <p>
                          {/* Display the discounted price if it exists, else show regular price */}
                          {item.disocunted_price ? (
                            <>${parseFloat(item.disocunted_price).toFixed(2)}</>
                          ) : (
                            <>${parseFloat(item.price).toFixed(2)}</>
                          )}
                        </p>
                        <span className="itemNum">
                          Quantity: {item.quantity}
                        </span>
                        <div className="cardBtn">
                          <button
                            onClick={() =>
                              updateWishlistQuantity(item.id, "decrement")
                            }
                            className="btn remove-btn"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="total-price">
              <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            </div>
            <div className="text-center">
              <button
                className="clear-btn"
                onClick={clearWishlist}
                disabled={wishlistItems.length === 0} // Disable the button when the wishlist is empty
              >
                Remove All
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

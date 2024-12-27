import { useWishlist } from "../../WishlistContext/WishlistContext.jsx"; // Import WishlistContext
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist(); // Use Wishlist Context

  // Calculate the total price for wishlist items
  const totalPrice =
    wishlistItems && Array.isArray(wishlistItems)
      ? wishlistItems.reduce((total, item) => total + item.price, 0)
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

      <h1 className="text-center">Your Wishlist</h1>
      <section className="wishlist">
        {wishlistItems.length === 0 ? (
          <p className="text-center">
            Your wishlist is empty. Start adding some products!
          </p>
        ) : (
          <>
            <div className="wishlist-container">
              {wishlistItems.map((item, index) => (
                <div key={index} className="wishlist-item">
                  <img
                    src={item.image_1}
                    alt={item.name}
                    className="wishlist-item-image"
                  />
                  <div className="wishlist-item-details">
                    <h5>{item.name}</h5>
                    <p>Category: {item.category}</p>
                    <p>
                      Price: ${item.sale ? item.disocunted_price : item.price}
                    </p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total Price Section */}
            <div className="total-price">
              <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            </div>
          </>
        )}
      </section>
    </>
  );
}

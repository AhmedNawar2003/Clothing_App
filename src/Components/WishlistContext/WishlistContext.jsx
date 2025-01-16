import { createContext, useContext, useState, useEffect } from "react";
import "./WishlistContext.css";
const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [message, setMessage] = useState("");

  // Load wishlist from sessionStorage on mount
  useEffect(() => {
    const storedWishlist = JSON.parse(sessionStorage.getItem("wishlist"));
    if (storedWishlist) {
      setWishlistItems(storedWishlist);
    }
  }, []);

  // Save wishlist to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Show message
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  // Add or Update item in Wishlist
  const addToWishlist = (product) => {
    const existingItem = wishlistItems.find((item) => item.id === product.id);

    if (existingItem) {
      setWishlistItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      showMessage("Item already exists in the wishlist and quantity updated!");
    } else {
      setWishlistItems((prevItems) => [
        ...prevItems,
        { ...product, quantity: 1 },
      ]);
      showMessage("Item added to wishlist successfully!");
    }
  };

  // Remove item from Wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    showMessage("Item removed from wishlist!");
  };

  // Remove all items from Wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
    showMessage("Wishlist cleared!");
  };

  // Update quantity (increment or decrement)
  const updateWishlistQuantity = (productId, action) => {
    setWishlistItems(
      (prevItems) =>
        prevItems
          .map((item) => {
            if (item.id === productId) {
              if (action === "increment") {
                return { ...item, quantity: item.quantity + 1 };
              }
              if (action === "decrement" && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              } else if (action === "decrement" && item.quantity === 1) {
                return null; // Remove item if quantity is 1
              }
            }
            return item;
          })
          .filter(Boolean) // Remove null values
    );
    showMessage("Item removed from wishlist!");
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        updateWishlistQuantity,
        removeFromWishlist,
        clearWishlist,
        message,
      }}
    >
      {children}
      {/* Render the message at the top */}
      {message && <div className="wishlist-message">{message}</div>}
    </WishlistContext.Provider>
  );
};

import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

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

  // Add or Update item in Wishlist
  const addToWishlist = (product) => {
    // Check if item is already in the wishlist
    const existingItem = wishlistItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Update quantity if item is already in wishlist
      setWishlistItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increment quantity
            : item
        )
      );
    } else {
      // Add new item to wishlist
      setWishlistItems((prevItems) => [
        ...prevItems,
        { ...product, quantity: 1 }, // Start quantity at 1
      ]);
    }
  };

  // Remove item from Wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  //Remove all items from Wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };
  // Update quantity (increment or decrement)
  const updateWishlistQuantity = (productId, action) => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId) {
          if (action === "increment") {
            return { ...item, quantity: item.quantity + 1 };
          }
          if (action === "decrement" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else if (action === "decrement" && item.quantity === 1) {
            return null; // Item will be removed when quantity reaches 1
          }
        }
        return item;
      }).filter(Boolean) // Remove null values (items with 0 quantity)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        updateWishlistQuantity,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

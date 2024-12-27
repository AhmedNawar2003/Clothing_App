// WishlistContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist) {
      setWishlistItems(storedWishlist);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleWishlistToggle = (product) => {
    // Check if the product already exists in the wishlist
    const isProductInWishlist = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (isProductInWishlist) {
      // If the product is in the wishlist, remove it
      setWishlistItems(wishlistItems.filter((item) => item.id !== product.id));
    } else {
      // If the product is not in the wishlist, add it
      setWishlistItems([...wishlistItems, product]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, handleWishlistToggle }}>
      {children}
    </WishlistContext.Provider>
  );
};

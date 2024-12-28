import { createContext, useState, useContext } from "react";

// Create a context for the cart
const CartContext = createContext();

// CartContext Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Initialize as an empty array

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  const clearCart = () => {
    setCartItems([]); // Clears the cart
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart ,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

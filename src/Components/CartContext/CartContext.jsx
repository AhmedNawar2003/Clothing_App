import { createContext, useContext, useState, useEffect } from "react";
import "./CartContext.css";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(sessionStorage.getItem("cartItems")) || []
  );
  const [message, setMessage] = useState(""); // For showing success or error message

  // Effect to update sessionStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      sessionStorage.removeItem("cartItems"); // Remove from sessionStorage if the cart is empty
    }
  }, [cartItems]);

  const addToCart = (item) => {
    // Check if the product already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
      // Set message to indicate the item already exists and its quantity is updated
      setMessage("Item already exists in the cart and quantity updated!");
    } else {
      // If the item doesn't exist, add it to the cart with the specified quantity
      setCartItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: item.quantity },
      ]);
      // Set message to indicate the item was added successfully
      setMessage("Item added to cart successfully!");
    }

    // Show success message for 3 seconds
    setTimeout(() => {
      setMessage(""); // Hide message after 3 seconds
    }, 3000);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) => {
          if (item.id === itemId) {
            // Decrease quantity if more than 1
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            // If quantity is 1, remove the item from the cart
            return null;
          }
          return item;
        })
        .filter(Boolean); // Remove null values from the cart
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]); // This will trigger the useEffect hook to remove from sessionStorage
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
      {message && <div className="success-message">{message}</div>}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

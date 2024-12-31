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

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  const addToCart = (item) => {
    // Check if the product already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists, update its quantity
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
      showMessage("Item already exists in the cart and quantity updated!");
    } else {
      // If the item doesn't exist, add it to the cart with the specified quantity
      setCartItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: item.quantity },
      ]);
      showMessage("Item added to cart successfully!");
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
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
        .filter(Boolean) // Remove null values from the cart
    );
    showMessage("Item removed from cart!");
  };

  const clearCart = () => {
    setCartItems([]); // This will trigger the useEffect hook to remove from sessionStorage
    showMessage("All items removed from the cart!");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        message,
      }}
    >
      {children}
      {message && <div className="cart-message">{message}</div>}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCart } from "../../CartContext/CartContext.jsx";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate the total price safely
  const totalPrice =
    Array.isArray(cartItems) && cartItems.length > 0
      ? cartItems.reduce((total, item) => {
          const price = item.sale ? item.discounted_price : item.price;
          return total + (price || 0);
        }, 0)
      : 0;

  return (
    <>
      <HelmetProvider>
        <Helmet title="Cart" />
      </HelmetProvider>
      <h1 className="text-center">Your Cart</h1>
      <section className="cart">
        {cartItems && cartItems.length === 0 ? (
          <p className="text-center">
            Your cart is empty. Start adding some products!
          </p>
        ) : (
          <>
            <div className="cart-container">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.image_1}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h5>{item.name}</h5>
                    <p>Category: {item.category}</p>
                    <p>
                      Price: ${item.sale ? item.discounted_price : item.price}
                    </p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
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
            <div className="text-center">
              <button className="clear-cart" onClick={clearCart}>
                Remove All
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

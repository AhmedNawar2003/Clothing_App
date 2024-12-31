import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCart } from "../../CartContext/CartContext.jsx";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, message } = useCart();  // Access the message from CartContext

  // Calculate the total price safely
  const totalPrice =
    Array.isArray(cartItems) && cartItems.length > 0
      ? cartItems.reduce((total, item) => {
          const price =
            parseFloat(
              item.sale && item.disocunted_price
                ? item.disocunted_price
                : item.price
            ) || 0;
          return total + price * (item.quantity || 0);
        }, 0)
      : 0;
  return (
    <>
      <HelmetProvider>
        <Helmet title="Cart" />
      </HelmetProvider>
      <section className="cart">
        {/* Display success or error message */}
        {message && (
          <div className="cart-message">
            {message}
          </div>
        )}
        {cartItems && cartItems.length === 0 ? (
          <p className="text-center">
            Your cart is empty. Start adding some products!
          </p>
        ) : (
          <>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <h1 className="head">Your Cart</h1>
                </div>
              </div>
              {cartItems.map((item, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="card">
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
                    <div className="cardBody">
                      <h5>{item.name}</h5>
                      <p>Category: {item.category}</p>
                      <p>
                        {item.disocunted_price ? (
                          <>${parseFloat(item.disocunted_price).toFixed(2)}</>
                        ) : (
                          <>${parseFloat(item.price).toFixed(2)}</>
                        )}
                      </p>
                      <span className="itemNum">Quantity: {item.quantity}</span>
                      <p>
                        Total: $
                        {(
                          (parseFloat(
                            item.sale ? item.disocunted_price : item.price
                          ) || 0) * item.quantity
                        ).toFixed(2)}
                      </p>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)} // Decrement or remove item
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-price">
              <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            </div>
            <div className="text-center">
              <button
                className="clear-btn"
                onClick={clearCart}
                disabled={cartItems.length === 0} // Disable the button when the cart is empty
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

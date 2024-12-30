import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import App from "./App.jsx";
import { CartProvider } from "./Components/CartContext/CartContext.jsx";
import { WishlistProvider } from "./Components/WishlistContext/WishlistContext.jsx"; // Import WishlistProvider

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </CartProvider>
);

import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Shop from "./Components/Pages/Shop/Shop";
import Blog from "./Components/Pages/Blog/Blog";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Wishlist from "./Components/Pages/Wishlist/Wishlist";
import Cart from "./Components/Pages/Cart/Cart";
export default function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "shop", element: <Shop />},
        { path: "blog", element: <Blog />},
        { path: 'login', element: <Login />},
        { path: 'register', element: <Register />},
        {path:'wishlist', element: <Wishlist />},
        {path:'cart', element: <Cart />}
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

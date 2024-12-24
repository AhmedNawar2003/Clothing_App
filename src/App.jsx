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
import Error_404 from "./Components/Error_404/Error_404";
import Company from "./Components/Pages/Blog/Company/Company";
import Fashion from "./Components/Pages/Blog/Fashion/Fashion";
import StyleBlog from "./Components/Pages/Blog/StyleBlog/StyleBlog";
import Trend from "./Components/Pages/Blog/Trend/Trend";
import Beauty from "./Components/Pages/Blog/Beauty/Beauty";
export default function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "shop", element: <Shop /> },
        {
          path: "blog",
          element: <Blog />,
          children: [
            { path: "company", element: <Company /> },
            { path: "fashion", element: <Fashion /> },
            { path: "style", element: <StyleBlog /> },
            { path: "trends", element: <Trend /> },
            { path: "beauty", element: <Beauty /> },
          ],
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "cart", element: <Cart /> },
      ],
    },
    { path: "*", element: <Error_404 /> },
  ]);
  return <RouterProvider router={router} />;
}

import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Wishlist() {
  return (
    <div>
      <HelmetProvider>
        <Helmet title="Wishlist" />
        <meta name="description" content="Your personalized shopping list" />
        <meta name="keywords" content="shopping list, wishlist, personalized" />
        <meta name="og:title" content="Wishlist" />
        <meta name="og:description" content="Your personalized shopping list" />
        <meta name="og:type" content="website" />
      </HelmetProvider>
      <h1>WishList</h1>
    </div>
  )
}

import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Shop() {
  return (
    <div>
      <HelmetProvider>
        <Helmet title="Shop" />
        <meta name="description" content="Our shop offers a wide range of products" />
        <meta property="og:title" content="Shop" />
        <meta property="og:description" content="Our shop offers a wide range of products" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.graduateproject.com/shop" />
      </HelmetProvider>
      <h1>Shop</h1>
    </div>
  )
}

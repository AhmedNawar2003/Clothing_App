import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Cart() {
  return (
    <div>
      <HelmetProvider>
        <Helmet title="Cart" />
      </HelmetProvider>
      <h1>Cart</h1>
    </div>
  )
}

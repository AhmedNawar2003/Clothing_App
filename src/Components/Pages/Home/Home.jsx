import { Helmet, HelmetProvider } from "react-helmet-async";
import Collections from "./Collections/Collections";
import Service from "./service/service";
import SpringCollections from "./SpringCollections/SpringCollections";
import Summer from "./Summer/Summer";
import Tshirts from "./Tshirts/Tshirts";
import Uomo from "./Uomo/Uomo";

export default function Home() {
  return (
    <div>
      <HelmetProvider>
        <Helmet title="Home" />
        <meta name="description" content="Welcome to our clothing store!" />
        <meta name="keywords" content="clothing, store, fashion, shopping" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Welcome to our clothing store!" />
      </HelmetProvider>
      <Summer />
      <Collections />
      <SpringCollections
        initialDays={170}
        initialHours={15}
        initialMinutes={50}
        initialSeconds={59}
      />
      <Tshirts />
      <Uomo />
      <Service/>
    </div>
  );
}

import { Helmet, HelmetProvider } from "react-helmet-async";
import Collections from "./Collections/Collections";
import Service from "./service/service";
import SpringCollections from "./SpringCollections/SpringCollections";
import Summer from "./Summer/Summer";
import Trendy from "./TrendyProducts/Trendy";
import Tshirts from "./Tshirts/Tshirts";
import Uomo from "./Uomo/Uomo";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Helmet title="Home" />
        <meta name="description" content="Welcome to our clothing store!" />
        <meta name="keywords" content="clothing, store, fashion, shopping" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Welcome to our clothing store!"
        />
      </HelmetProvider>

      <div data-aos="fade-up">
        <Summer />
      </div>
      <div data-aos="fade-left">
        <Collections />
      </div>
      <div data-aos="fade-right">
        <Trendy />
      </div>
      <div data-aos="zoom-in">
        <SpringCollections
          initialDays={170}
          initialHours={15}
          initialMinutes={50}
          initialSeconds={59}
        />
      </div>
      <div data-aos="fade-up">
        <Tshirts />
      </div>
      <div data-aos="fade-down">
        <Uomo />
      </div>
      <div data-aos="flip-left">
        <Service />
      </div>
    </div>
  );
}

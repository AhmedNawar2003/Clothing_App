import { Helmet, HelmetProvider } from "react-helmet-async";
import Collections from "./Collections/Collections";
import Service from "./service/service";
import SpringCollections from "./SpringCollections/SpringCollections";
import Summer from "./Summer/Summer";
import Tshirts from "./Tshirts/Tshirts";
import Uomo from "./Uomo/Uomo";
import AOS from "aos";
import { useEffect } from "react";
import OurProducts from "./OurProducts/OurProducts";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Welcome to our clothing store!" />
          <meta name="keywords" content="clothing, store, fashion, shopping" />
          <meta name="author" content="Your Name" />
          <meta property="og:title" content="Home" />
          <meta
            property="og:description"
            content="Welcome to our clothing store!"
          />
        </Helmet>
      </HelmetProvider>

      <div data-aos="fade-up">
        <Summer />
      </div>
      <div data-aos="fade-left">
        <Collections />
      </div>
      <div data-aos="fade-up">
        <SpringCollections
          initialDays={170}
          initialHours={15}
          initialMinutes={50}
          initialSeconds={59}
        />
      </div>
      <div data-aos="fade-right">
        <OurProducts/>
        </div>
      <div data-aos="fade-left">
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

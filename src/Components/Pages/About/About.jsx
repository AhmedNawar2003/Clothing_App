import AboutUomo from "./AboutUomo/AboutUomo";
import Company from "./Company/Company";
import MissionVersion from "./MissionVersion/MissionVersion";
import OurStory from "./OurStory/OurStory";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Service from "../Home/service/service";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About our company" />
        </Helmet>
      </HelmetProvider>

      <div data-aos="fade-up">
        <AboutUomo />
      </div>
      <div data-aos="fade-left">
        <OurStory />
      </div>
      <div data-aos="fade-right">
        <MissionVersion />
      </div>
      <div data-aos="zoom-in">
        <Company />
      </div>
      <div data-aos="fade-up">
        <Service />
      </div>
    </div>
  );
}

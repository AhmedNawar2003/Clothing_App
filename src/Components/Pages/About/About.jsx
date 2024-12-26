import AboutUomo from "./AboutUomo/AboutUomo";
import Company from "./Company/Company";
import MissionVersion from "./MissionVersion/MissionVersion";
import OurStory from "./OurStory/OurStory";
import Service from "../Home/Service/Service";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function About() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About our company" />
        </Helmet>
      </HelmetProvider>
      <AboutUomo />
      <OurStory />
      <MissionVersion />
      <Company />
      <Service />
    </div>
  );
}

import AboutUomo from "./AboutUomo/AboutUomo";
import Company from "./Company/Company";
import MissionVersion from "./MissionVersion/MissionVersion";
import OurStory from "./OurStory/OurStory";
import Service from "../Home/Service/Service";
export default function About() {
  return (
    <div>
      <AboutUomo />
      <OurStory />
      <MissionVersion />
      <Company />
      <Service />
    </div>
  );
}

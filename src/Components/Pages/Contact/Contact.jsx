import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactForm from "./ContactForm/ContactForm";
import ContactStores from "./ContactStores/ContactStores";
import Iframe from "./Iframe/Iframe";

export default function Contact() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Contact Us</title>
          <meta name="description" content="Contact us for more information about our services." />
          <meta property="og:title" content="Contact Us" />
          <meta property="og:description" content="Contact us for more information about our services." />
          <meta property="og:type" content="website" />
        </Helmet>
      </HelmetProvider>
      <Iframe/>
      <ContactStores/>
      <ContactForm/>
    </div>
  )
}

import ContactForm from "./ContactForm/ContactForm";
import ContactStores from "./ContactStores/ContactStores";
import Iframe from "./Iframe/Iframe";

export default function Contact() {
  return (
    <div>
      <Iframe/>
      <ContactStores/>
      <ContactForm/>
    </div>
  )
}

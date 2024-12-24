import "./ContactStores.css";
import "../ContactResponsive.css";
export default function ContactStores() {
  const ContactStores = {
    paragraph1: "1418 River Drive, Suite 35 Cottonhall, CA 9622  United States",
    paragraph2: "sale@uomo.com",
    paragraph3: "+1 246-345-0695",
  };
  return (
    <>
      <section className="stores">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <h3>Store in London</h3>
                <p className="firstParagraph">{ContactStores.paragraph1}</p>
                <p className="secondParagraph">{ContactStores.paragraph2}</p>
                <p className="thirdParagraph">{ContactStores.paragraph3}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <h3>Store in Istanbul</h3>
                <p className="firstParagraph">{ContactStores.paragraph1}</p>
                <p className="secondParagraph">{ContactStores.paragraph2}</p>
                <p className="thirdParagraph">{ContactStores.paragraph3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

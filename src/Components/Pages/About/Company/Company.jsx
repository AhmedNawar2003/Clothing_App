import "./Company.css";
import '../AboutResponsive.css';
import about2 from "../../../../assets/image/about-2.webp";
export default function Company() {
  return (
    <>
      <section className="Company">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card imgCard">
                <img src={about2} alt="about2" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-text">
                <h2>The Company</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  sapien dignissim a elementum. Sociis metus, hendrerit mauris
                  id in. Quis sit sit ultrices tincidunt euismod luctus diam.
                  Turpis sodales orci etiam phasellus lacus id leo. Amet turpis
                  nunc, nulla massa est viverra interdum. Praesent auctor nulla
                  morbi non posuere mattis. Arcu eu id maecenas cras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

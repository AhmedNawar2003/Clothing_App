import about from "../../../../assets/image/about-1.webp";
import "./AboutUomo.css";
import '../AboutResponsive.css';
export default function AboutUomo() {
  return (
    <>
      <section className="aboutUomo">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card-head">
                <h2>About UOMO</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
              <img src={about} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

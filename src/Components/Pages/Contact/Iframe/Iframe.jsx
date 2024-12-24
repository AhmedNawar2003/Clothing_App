import "./Iframe.css";
import "../ContactResponsive.css";
export default function Iframe() {
  return (
    <>
      <section className="Iframe">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-head">
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="card iframe-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.777791995365!2d-7.964200224678905!3d37.17782694632285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab161c81fb0ff%3A0x867380c80c46b1d!2sAmendoeira%20Organics!5e1!3m2!1sen!2sus!4v1735042064024!5m2!1sen!2sus"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

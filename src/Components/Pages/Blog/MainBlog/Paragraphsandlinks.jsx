import { Link } from "react-router-dom";
import "./MainBlog.css";
export default function Paragraphsandlinks() {
  return (
    <>
      <section className="paragraph_links">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  sapien dignissim a elementum. Sociis metus, hendrerit mauris
                  id in. Quis sit sit ultrices tincidunt euismod luctus diam.
                  Turpis sodales orci etiam phasellus lacus id leo. Amet turpis
                  nunc, nulla massa est viverra interdum. Praesent auctor nulla
                  morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames
                  tincidunt leo, sed vitae, pretium interdum. Non massa,
                  imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel.
                  Nibh euismod donec elit posuere lobortis consequat faucibus
                  aliquam metus. Ornare consequat, vulputate sit maecenas mauris
                  urna sed fringilla. Urna fermentum iaculis pharetra, maecenas
                  dui nullam nullam rhoncus. Facilisis quis vulputate sem
                  gravida lacus, justo placerat.
                </p>
                <p>
                  She'd years darkness days. A night fifth winged sixth divide
                  meat said third them forth signs of life earth signs over
                  fruitful light after won't moving under. Thing yielding upon
                  seed. Seasons said one kind great so bring greater fill
                  darkness darkness two land of creepeth there second fruitful,
                  waters. Make don't void years Gathering gathering divide fill.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="linkDiv facebook">
                        <span>
                          <Link to="#">
                          <i className="fa-brands fa-facebook-f"></i>
                          </Link>
                        </span>
                        <span>Share on Facebook</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="linkDiv twitter">
                        <span>
                          <Link to="#">
                          <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </span>
                        <span>Share on Twitter</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="linkDiv pinterest">
                        <span>
                          <Link to="#">
                          <i className="fa-brands fa-pinterest"></i>
                          </Link>
                        </span>
                        <span>Share on Pinterest</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import "./ContactForm.css";
import "../ContactResponsive.css";
export default function ContactForm() {
  return (
    <>
      <section className="form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="name"
                    />
                    <label htmlFor="floatingInput1">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput2"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput2">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="message"
                      id="floatingTextarea2"
                    ></textarea>
                    <label htmlFor="floatingTextarea2">message</label>
                  </div>
                  <button type="submit" className="btn submit w-25">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

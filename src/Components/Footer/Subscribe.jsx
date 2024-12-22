import payment from "../../assets/image/payment-options.webp";
import "./Footer.css";
export default function Subscribe() {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-head">
            <h3 className="subscribe">Subscribe</h3>
          </div>
          <div className="card-body">
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="input-group">
              <input
                type="emil"
                className="form-control"
                placeholder="your emil address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="join " type="button" id="button-addon2">
                Join
              </button>
            </div>
            <div className="payment">
              <h6>secure payment</h6>
              <div className="row">
                <div className="col">
                  <img src={payment} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

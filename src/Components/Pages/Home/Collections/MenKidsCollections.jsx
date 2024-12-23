import { Link } from "react-router-dom";
import "./Collections.css";
import collection2 from "../../../../assets/image/collection_grid_2.jpg";
import collection3 from "../../../../assets/image/collection_grid_3.jpg";
export default function MenKidsCollections() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="image">
                <img src={collection2} alt="collection2" />
              </div>
              <div className="content menContent">
                <h6>Hot List</h6>
                <h2>Men Collection</h2>
                <Link className="link" to="">shop now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="image">
                    <img src={collection3} alt="collection3" />
                  </div>
                  <div className="content Kids-content">
                    <h6>Hot List</h6>
                    <h2>KIDS Collection</h2>
                    <Link className="link" to="">shop now</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 Gift">
                <div className="card e-gift-card">
                  <div className="">

                  </div>
                  <div className="content">
                    <h2>E-Gift Cards</h2>
                    <h6>Surprise someone with the gift they really want.</h6>
                    <Link className="link" to="">shop now</Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

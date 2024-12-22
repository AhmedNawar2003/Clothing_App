import { Link } from "react-router-dom";
import "./Collections.css";
import collection1 from "../../../../assets/image/collection_grid_1.jpg";
import MenKidsCollections from "./MenKidsCollections";
export default function Collections() {
  return (
    <div>
      <section className="collections">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="image">
                  <img src={collection1} alt="collection1" />
                </div>
                <div className="content">
                  <h6>Hot List</h6>
                  <h2>Women Collection</h2>
                  <Link className="link" to="">shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <MenKidsCollections />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

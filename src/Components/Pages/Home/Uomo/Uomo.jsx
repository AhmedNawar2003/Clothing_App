import ImgList from "./ImgList";
import "./Uomo.css";
export default function Uomo() {
  return (
    <div>
      <section className="Uomo">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-head">
                <h2>@UOMO</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <ImgList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

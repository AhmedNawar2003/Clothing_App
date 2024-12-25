import blog1 from "../../../../assets/image/blog-1.webp";
export default function WomenDetail() {
  return (
    <>
      <section className="detail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-head">
                <h2>Woman with good shoes is never be ugly place</h2>
                <div className="date">
                  <span>By By Admin</span>
                  <span>April 05, 2023</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <img src={blog1} alt="detail" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

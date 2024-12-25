import { Link } from "react-router-dom";
import blog2 from "../../../../assets/image/blog-2.webp";
export default function TipsBlog() {
  return (
    <>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-img">
            <img src={blog2} alt="blog2" />
          </div>
          <div className="card-body">
            <div className="date">
              <span>By By Admin</span>
              <span>April 05, 2023</span>
            </div>
            <h3>5 Tips to Increase Your Online Sales</h3>
            <p>
              Midst one brought greater also morning green saying had good. Open
              stars day let over gathered, grass face one every light of under.
            </p>
            <Link to="/blogtips" className="link">Continue Reading</Link>
          </div>
        </div>
      </div>
    </>
  );
}

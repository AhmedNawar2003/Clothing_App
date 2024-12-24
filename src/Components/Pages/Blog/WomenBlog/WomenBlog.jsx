import { Link } from "react-router-dom";
import blog1 from "../../../../assets/image/blog-1.webp";
export default function WomenBlog() {
  return (
    <>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-img">
            <img src={blog1} alt="blog1" />
          </div>
          <div className="card-body">
            <div className="date">
              <span>By By Admin</span>
              <span>April 05, 2023</span>
            </div>
            <h3>Woman with good shoes is never be ugly place</h3>
            <p>
              Midst one brought greater also morning green saying had good. Open
              stars day let over gathered, grass face one every light of under.
            </p>
            <Link to="" className="link">Continue Reading</Link>
          </div>
        </div>
      </div>
    </>
  );
}

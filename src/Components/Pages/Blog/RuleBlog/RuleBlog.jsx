import { Link } from "react-router-dom";
import blog4 from "../../../../assets/image/blog-4.webp";
export default function RuleBlog() {
  return (
    <>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-img">
            <img src={blog4} alt="blog3" />
          </div>
          <div className="card-body">
            <div className="date">
              <span>By By Admin</span>
              <span>April 05, 2023</span>
            </div>
            <h3>Given Set was without from god divide rule Hath</h3>
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

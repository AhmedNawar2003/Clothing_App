import { Link } from "react-router-dom";
import blog3 from "../../../../assets/image/blog-3.webp";
export default function TreeBlog() {
  return (
    <>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-img">
            <img src={blog3} alt="blog3" />
          </div>
          <div className="card-body">
            <div className="date">
              <span>By By Admin</span>
              <span>April 05, 2023</span>
            </div>
            <h3>Tree earth fowl given moveth deep lesser After</h3>
            <p>
              Midst one brought greater also morning green saying had good. Open
              stars day let over gathered, grass face one every light of under.
            </p>
            <Link to="/blogtree" className="link">Continue Reading</Link>
          </div>
        </div>
      </div>
    </>
  );
}

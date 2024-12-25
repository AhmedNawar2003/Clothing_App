import "./MainBlog.css";
import blog15 from "../../../../assets/image/blog-15.webp";
import blog16 from "../../../../assets/image/blog-16.webp";
export default function Images() {
  return (
    <>
      <section className="MainBlogImages">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img src={blog15} alt="blog15" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img src={blog16} alt="blog16" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

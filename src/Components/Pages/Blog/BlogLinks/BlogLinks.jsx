import "./BlogLinks.css";
import blog_bg from "../../../../assets/image/blog_title_bg.jpg";
import { Link} from "react-router-dom";

const categories = [
  { path: "", label: "All" },
  { path: "company", label: "Company" },
  { path: "fashion", label: "Fashion" },
  { path: "style", label: "Style" },
  { path: "trends", label: "Trends" },
  { path: "beauty", label: "Beauty" },
];
 

export default function BlogLinks() {
  return (
    <section className="blogLinks">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="blogImg">
                <img src={blog_bg} alt="Blog Background" />
              </div>
              <div className="blogContent">
                <h2>The Blog</h2>
                <div className="blogLinks">
                  {categories.map((category) => (
                    <Link key={category.path} to={`${category.path}`} className="link">
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

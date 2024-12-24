import TreeBlog from "../TreeBlog/TreeBlog";
import WomenBlog from "../WomenBlog/WomenBlog";

export default function StyleBlog() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <WomenBlog />
            <TreeBlog />
          </div>
        </div>
      </section>
    </div>
  );
}

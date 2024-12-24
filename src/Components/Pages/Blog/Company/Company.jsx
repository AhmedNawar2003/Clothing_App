import RuleBlog from "../RuleBlog/RuleBlog";
import TipsBlog from "../TipsBlog/TipsBlog";

export default function Company() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <TipsBlog />
            <RuleBlog />
          </div>
        </div>
      </section>
    </div>
  );
}

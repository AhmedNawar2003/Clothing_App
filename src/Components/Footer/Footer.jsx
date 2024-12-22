import Logo from "./logo";
import MiddleContent from "./MiddleContent";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
        <div className="row">
          <Logo/>
          <MiddleContent/>
          <Subscribe/>
        </div>
        </div>
      </section>
    </>
  );
}

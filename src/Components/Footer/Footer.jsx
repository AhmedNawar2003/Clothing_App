import Logo from "./logo";
import MiddleContent from "./MiddleContent";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <>
      <section className="footer pb-0">
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

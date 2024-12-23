import "./MissionVersion.css";
import '../AboutResponsive.css';

export default function MissionVersion() {
  const paragraph = {
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip e ea commodo consequat.",
  };
  return (
    <>
      <section className="mission_version">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <h2> Our Mission</h2>
                <p className="paragraph">
                  {paragraph.text}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <h2> Our Version</h2>
                <p className="paragraph">
                  {paragraph.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

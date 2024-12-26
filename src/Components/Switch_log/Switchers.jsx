import { Link } from "react-router-dom";
import "./Switchers.css";

export default function Switchers() {
  return (
    <>
      <div className="col-sm-10 col-5 row switchers">
        <button className="col-sm-5 col-10">
          <Link to="/login" className="linkBtn">Log In</Link>
        </button>
        <button className="col-sm-5 col-10">
          <Link to="/register" className="linkBtn">Register</Link>
        </button>
      </div>
    </>
  );
}

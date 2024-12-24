import "./login.css"
import Switchers from "../../Switch_log/Switchers"

export default function Login() {
  return <>
    <div className="container">
      <Switchers />
      <div className="row logIn">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingemail" placeholder="email" />
          <label htmlFor="floatingemail">email address *</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password *</label>
        </div>
        <button className="col-sm-12 col-5 logBtn">
          log in
        </button>
        <div className="col-sm-12 col-10 toRegister">
          <p>no account yet ? <a href="">create account</a></p>
        </div>
      </div>
    </div>
  </>
}

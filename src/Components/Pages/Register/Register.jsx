import "./Register.css"
import Switchers from "../../Switch_log/Switchers"

export default function Register() {
  return <>
    <div className="container">
      <Switchers />
      <div className="row register">
        <div className="form-floating mb-3">
          <input type="username" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingemail" placeholder="email" />
          <label htmlFor="floatingemail">email address *</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password *</label>
        </div>
        <div className="col-sm-12 col-10">
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
        </div>
        <button className="col-sm-12 col-10 regBtn">
          register
        </button>
      </div>
    </div>
  </>
}

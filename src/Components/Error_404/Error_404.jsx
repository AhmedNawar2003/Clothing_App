import { Link } from "react-router-dom";

export default function Error_404() {
  return (
    <div className="bg-danger h-100 w-100">
      <h1>Error 404</h1>
      <Link to='/'>
      <button className="btn btn-primary">Go to Home</button>
      </Link>
    </div>
  )
}

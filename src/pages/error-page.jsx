import { FaExclamationTriangle } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="d-flex flex-column justify-content-center align-items-center mt-3"
    >
      <h1>Oops!</h1>
      <p className="d-flex align-items-center gap-2">
        <FaExclamationTriangle className="text-danger" />
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <strong className="d-flex gap-2">
          <i> {error.status}</i>-<i>{error.statusText || error.message}</i>
        </strong>
      </p>
      <Link to="/" className="btn btn-dark">
        Go to Home
      </Link>
    </div>
  );
}

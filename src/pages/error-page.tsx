import { useRouteError } from "react-router-dom";

function ErrorPage() {
  interface ErrorObject {
    status: number;
    statusText?: string;
    message?: string;
  }

  const error: ErrorObject = (useRouteError() as ErrorObject) || {};
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.status}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
export default ErrorPage;

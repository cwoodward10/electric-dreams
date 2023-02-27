import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col gap-4 m-auto">
      <section className="flex flex-col justify-center">
        <h1 className="text-3xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-accent-red">
          <i>{error.statusText || error.message}</i>
        </p>
      </section>
      <section className="flex flex-col justify-center">
        <p>Go back to another page?</p>
        <div className="flex gap-4">
          <Link to={`/`}>Home</Link>
          <p >|</p>
          <Link to={`/Create`}>Story Generator</Link>
        </div>
      </section>
    </div>
  );
}
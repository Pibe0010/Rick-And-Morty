import "./NotFound.css";

export const NotFoundPage = () => {
  return (
    <section className="notFound-container">
      <h2 className="title-notFound">Not Found Pege </h2>
      <div className="loader-notFound"></div>
      <p className="text-notFound">404</p>
      <a className="btn-link" href="/">
        Characters
      </a>
    </section>
  );
};

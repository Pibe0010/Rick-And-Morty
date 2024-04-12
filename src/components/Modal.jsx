import "./Modal.css";
import logo from "../assets/logo.png";

export const Modal = ({ open, close, children, episode }) => {
  if (!open) return null;

  return (
    <>
      <section className="modal-container">
        <section className="modal">
          <div className="btn-modal">
            <button onClick={close}>x</button>
          </div>
          <img className="logo-modal" src={logo} alt="Logo rick And Morty" />
          <h2 className="modal-title">{episode.name}</h2>
          <section className="container-modal-character">
            <div className="image-container">{children}</div>
          </section>
        </section>
      </section>
    </>
  );
};

import "./Modal.css";
import logo from "../assets/logo.png";

export const Modal = ({ open, close }) => {
  if (!open) return null;

  return (
    <>
      <section className="modal-container">
        <section className="modal">
          <div className="btn-modal">
            <button onClick={close}>x</button>
          </div>
          <img className="logo-modal" src={logo} alt="" />
          Hello World
        </section>
      </section>
    </>
  );
};

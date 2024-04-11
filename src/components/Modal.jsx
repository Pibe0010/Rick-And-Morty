import "./Modal.css";
import logo from "../assets/logo.png";

export const Modal = ({ open, close, character }) => {
  if (!open) return null;

  return (
    <>
      <section className="modal-container">
        <section className="modal">
          <div className="btn-modal">
            <button onClick={close}>x</button>
          </div>
          <img className="logo-modal" src={logo} alt="Logo rick And Morty" />
          <section className="container-modal-character">
            <div key={character.id}>
              <img
                className="charcter-img"
                src={character.image}
                alt={character.name}
              />
              <section>
                <h2 className="character-name">{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
              </section>
              <section>
                <p className="title-card">Episode</p>
                <p></p>
                <p className="title-card">Air data</p>
                <p></p>
              </section>
              <section>
                <p className="">Type</p>
                <p></p>
                <p className="">Dimension</p>
                <p></p>
              </section>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

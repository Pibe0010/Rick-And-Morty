import "./Character.css";
import { useState } from "react";
import { Modal } from "./Modal.jsx";

export const Character = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section>
        <article className="card">
          <div className="temporary_text">
            <img className="img" src={character.image} alt={character.name} />
          </div>
          <div className="card_content">
            <span className="card_title">{character.name}</span>
            <span className="card_subtitle">{character.species}</span>
            <section className="section-btn">
              <button className="btn-info" onClick={() => setIsOpen(true)}>
                More Info
              </button>
            </section>
            <section className="card_description">
              <p> Status: {character.status}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin.name}</p>
            </section>
          </div>
        </article>
        <Modal
          className="section-btn"
          open={isOpen}
          close={() => setIsOpen(false)}>
          hola mundo
        </Modal>
      </section>
    </>
  );
};

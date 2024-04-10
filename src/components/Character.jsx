import "./Character.css";

export const Character = ({ character }) => {
  return (
    <section>
      <article className="card">
        <div className="temporary_text">
          <img className="img" src={character.image} alt={character.name} />
        </div>
        <div className="card_content">
          <span className="card_title">{character.name}</span>
          <span className="card_subtitle">{character.species}</span>
          <section className="card_description">
            <p> Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p> Created: {character.created}</p>
          </section>
        </div>
      </article>
    </section>
  );
};

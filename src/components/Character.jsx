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
          <span className="card_subtitle">
            Thsi is a subtitle of this page. Let us see how it looks on the Web.
          </span>
          <p className="card_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
        </div>
      </article>
    </section>
  );
};

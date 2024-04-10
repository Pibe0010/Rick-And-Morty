import "./CardEpisode.css";

export const CardEpisode = ({ episode }) => {
  return (
    <section className="card-container">
      <section>
        <p className="episodes">Season {episode.episode}</p>
      </section>
      <div className="one-div">
        <div className="text">
          <p className="title-card">Episode</p>
          <p>{episode.name}</p>
          <p className="title-card">Air data</p>
          <p>{episode.air_date}</p>
          <p className="title-card">Created</p>
          <p>{episode.created}</p>
        </div>
      </div>
    </section>
  );
};

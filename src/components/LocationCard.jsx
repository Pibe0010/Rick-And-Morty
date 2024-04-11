import "./LocationCard.css";

export const LocationCard = ({ location }) => {
  return (
    <section>
      <div className="card-location">
        <div className="icon">{location.name}</div>
        <div className="content">
          <p className="title-location-card">Type</p>
          <p>{location.type}</p>
          <p className="title-location-card">Dimension</p>
          <p>{location.dimension}</p>
        </div>
      </div>
    </section>
  );
};

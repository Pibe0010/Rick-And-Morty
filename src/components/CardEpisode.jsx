import "./CardEpisode.css";
import { useEffect, useState } from "react";
import { Modal } from "./Modal.jsx";
import { LoadingData } from "./LoadingData.jsx";

export const CardEpisode = ({ episode }) => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [characterImages, setCharacterImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener las imágenes de los personajes
  useEffect(() => {
    const fetchCharacterImages = async () => {
      const characterImages = await Promise.all(
        episode.characters.map(async (url) => {
          const response = await fetch(url);
          const characterData = await response.json();
          setLoading(false);
          return characterData.image;
        })
      );
      return characterImages;
    };
    fetchCharacterImages().then(setCharacterImages);
  }, []);

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
          <section className="section-btn">
            <button className="btn-info" onClick={() => setIsModelOpen(true)}>
              Characters
            </button>
          </section>
        </div>
      </div>
      <Modal
        className="section-btn"
        episode={episode}
        open={isModalOpen}
        close={() => setIsModelOpen(false)}>
        {loading ? (
          <LoadingData />
        ) : (
          <>
            {characterImages.map((image, index) => (
              <img
                className="charcter-img"
                key={index}
                src={image}
                alt="Character"
              />
            ))}
          </>
        )}
      </Modal>
    </section>
  );
};

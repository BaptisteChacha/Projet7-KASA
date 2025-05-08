// src/Components/Carrousel.jsx
import { useState } from 'react';
import arrow_forward from '../Images/arrow_forward.svg'; // Flèche pour passer à l'image suivante
import arrow_back from '../Images/arrow_back_ios-24px 1.svg'; // Flèche pour revenir à l'image précédente

function Carrousel({ images }) {
  // État pour suivre l'index de l'image affichée
  const [count, setCount] = useState(0);

  // Vérifie si le tableau d'images est valide et contient plus d'une image
  const hasMultipleImages = Array.isArray(images) && images.length > 1;

  // Fonction pour afficher l'image suivante
  const NextImage = () => {
    if (hasMultipleImages) {
      setCount((count + 1) % images.length);
    }
  };

  // Fonction pour afficher l'image précédente
  const PreviousImage = () => {
    if (hasMultipleImages) {
      setCount((count - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="logo_container">
      {/* Affichage de l'image du logement */}
      <img
        src={images[count]}
        alt={`Image ${count + 1} sur ${images.length}`}
        className="logo"
      />

      {/* Flèche pour revenir à l'image précédente */}
      {hasMultipleImages && (
        <img
          src={arrow_back}
          alt="Précédente"
          className="arrow_back_carroussel"
          onClick={PreviousImage}
        />
      )}

      {/* Flèche pour passer à l'image suivante */}
      {hasMultipleImages && (
        <img
          src={arrow_forward}
          alt="Suivante"
          className="arrow_forward_carroussel"
          onClick={NextImage}
        />
      )}
    </div>
  );
}

export default Carrousel;

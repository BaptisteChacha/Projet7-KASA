// src/Components/Carrousel.jsx
import { useState } from 'react';
import arrow_forward from '../Images/arrow_forward.svg'; // Flèche pour passer à l'image suivante
import arrow_back from '../Images/arrow_back_ios-24px 1.svg'; // Flèche pour revenir à l'image précédente

function Carrousel({ images }) {
    // État pour suivre l'index de l'image affichée
    const [count, setCount] = useState(0);

    // Fonction pour afficher l'image suivante
    const NextImage = () => {
        if (images && images.length > 0) {
            // Passage à l'image suivante avec un cycle (retour au début après la dernière image)
            setCount((count + 1) % images.length);
        }
    };

    // Fonction pour afficher l'image précédente
    const PreviousImage = () => {
        if (images && images.length > 0) {
            // Passage à l'image précédente avec un cycle (retour à la dernière image après la première)
            setCount((count - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="logo_container">
            {/* Affichage de l'image du logement */}
            <img src={images[count]} alt="Carrousel" className="logo" />

            {/* Flèche pour revenir à l'image précédente */}
            <img
                src={arrow_back}
                alt="previous"
                className="arrow_back_carroussel"
                onClick={PreviousImage} // Au clic, afficher l'image précédente
            />

            {/* Flèche pour passer à l'image suivante */}
            <img
                src={arrow_forward}
                alt="next"
                className="arrow_forward_carroussel"
                onClick={NextImage} // Au clic, afficher l'image suivante
            />
        </div>
    );
}

export default Carrousel;

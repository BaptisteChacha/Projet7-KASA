// src/Components/Collapse.jsx
import { useState } from 'react';
import ARROW_UP from '../Images/arrow_up.svg'; // Icône pour "ouvrir"
import ARROW_BACK from '../Images/arrow_back.svg'; // Icône pour "fermer"

function Collapse({ title, content }) {
    // État pour gérer l'ouverture/fermeture du collapse
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour inverser l'état du collapse
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            {/* En-tête du collapse (clic pour ouvrir/fermer) */}
            <div className="collapse-header" onClick={toggleCollapse}>
                {title} {/* Affiche le titre passé en prop */}
                <img
                    src={isOpen ? ARROW_UP : ARROW_BACK} // Icône change en fonction de l'état
                    alt="arrow"
                    className="arrow"
                />
            </div>

            {/* Contenu du collapse, visible si isOpen est vrai */}
            {isOpen && <div className="collapse-content">{content}</div>}
        </div>
    );
}

export default Collapse;

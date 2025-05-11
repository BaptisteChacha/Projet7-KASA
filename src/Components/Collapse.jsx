// src/Components/Collapse.jsx
import { useState } from 'react';
import ARROW_UP from '../Images/arrow_up.svg'; // Icône pour "ouvrir"
import ARROW_BACK from '../Images/arrow_back.svg'; // Icône pour "fermer"

function Collapse({ title, content, className = '' }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse-container ${className}`}>
            <div className="collapse-header" onClick={toggleCollapse}>
                {title}
                <img
                    src={isOpen ? ARROW_UP : ARROW_BACK}
                    alt="arrow"
                    className="arrow"
                />
            </div>

            {isOpen && <div className="collapse-content">{content}</div>}
        </div>
    );
}

export default Collapse;

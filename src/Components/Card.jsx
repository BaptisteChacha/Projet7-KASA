import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Style/Card.css';

function Card() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                return response.json();
            })
            .then((data) => setItems(data))
            .catch((error) => console.error("Erreur :", error));
    }, []); // Le tableau vide garantit que la requête se fait seulement au montage du composant

    return (
        <div>
            <section id='Cards'>
                <ul className='list_card'>
                    {items.length > 0 ? (
                        items.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <Link to={`/Logement/${item.id}`}>
                                        <div className='img-home'>
                                            <div className='text'>{item.title}</div>
                                            <img className='img_location' src={item.cover} alt={item.title} />
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>Chargement des logements...</p>
                    )}
                </ul>
            </section>
        </div>
    );
}

export default Card;

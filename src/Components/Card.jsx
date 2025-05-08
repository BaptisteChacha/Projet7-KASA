import { Link } from 'react-router-dom'; // Importation de Link pour la navigation entre pages
import { useState, useEffect } from 'react'; // Importation des hooks React pour gérer l'état et les effets
import '../Style/Card.css'; // Importation du fichier CSS pour le style du composant

function Card() {
    // Déclaration de l'état local pour stocker les éléments des logements récupérés
    const [items, setItems] = useState([]);

    // Utilisation de useEffect pour effectuer un appel fetch lors du montage du composant
    useEffect(() => {
        // Appel API pour récupérer le fichier JSON des logements
        fetch("/logements.json")
            .then((response) => {
                // Vérification de la réponse, lève une erreur si le statut HTTP n'est pas 200
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                return response.json(); // Transformation de la réponse en JSON
            })
            .then((data) => setItems(data)) // Mise à jour de l'état avec les données récupérées
            .catch((error) => console.error("Erreur :", error)); // Gestion des erreurs de la requête
    }, []); // Le tableau vide assure que l'appel fetch ne se produit qu'une seule fois, au montage du composant

    return (
        <div>
            {/* Section contenant les cartes de logements */}
            <section id='Cards'>
                {/* Liste des cartes de logements */}
                <ul className='list_card'>
                    {/* Si des logements sont chargés, on les affiche */}
                    {items.length > 0 ? (
                        // Itération sur chaque élément pour afficher une carte par logement
                        items.map((item) => (
                            <li key={item.id}>
                                <div>
                                    {/* Lien vers la page détaillée du logement, basée sur l'ID */}
                                    <Link to={`/Logement/${item.id}`}>
                                        <div className='img-home'>
                                            {/* Affichage du titre du logement */}
                                            <div className='text'>{item.title}</div>
                                            {/* Affichage de l'image du logement, avec une description dans l'attribut alt */}
                                            <img className='img_location' src={item.cover} alt={item.title} />
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        // Affichage d'un message de chargement si les données sont en cours de récupération
                        <p>Chargement des logements...</p>
                    )}
                </ul>
            </section>
        </div>
    );
}

export default Card;

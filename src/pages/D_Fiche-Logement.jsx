// src/pages/Logement.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from '../Components/Header.jsx';
import '../Style/Header.css';
import '../Style/Fiche-Logement.css';
import Footer from '../Components/Footer.jsx';
import Collapse from '../Components/Collapse'; // Importation du composant Collapse
import arrow_forward from '../Images/arrow_forward.svg';
import arrow_back from '../Images/arrow_back_ios-24px 1.svg';
import FULL_STAR from '../Images/full_star.svg'; // Importer les étoiles
import EMPTY_STAR from '../Images/empty_star.svg'; // Importer l'étoile vide

function Logement() {
    const { id } = useParams(); // Récupère l'ID du logement
    const navigate = useNavigate(); // Permet de naviguer entre les pages
    const [logements, setLogements] = useState([]); // Liste des logements
    const [loading, setLoading] = useState(true); // Chargement des données
    const [error, setError] = useState(null); // Gestion des erreurs
    const [count, setCount] = useState(0); // Pour gérer l'index de l'image dans le carrousel

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                setLogements(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur de chargement");
                setLoading(false);
            });
    }, []);

    // Recherche du logement selon l'ID dans l'URL
    const logement = logements.find((item) => item.id === id);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;
    if (!logement) {
        navigate("/404", { replace: true });
        return null;
    }

    // Fonction pour passer à l'image suivante dans le carrousel
    const NextImage = () => {
        if (logement.pictures && logement.pictures.length > 0) {
            setCount((count + 1) % logement.pictures.length); // Passage à l'image suivante
        }
    };

    // Fonction pour revenir à l'image précédente dans le carrousel
    const PreviousImage = () => {
        if (logement.pictures && logement.pictures.length > 0) {
            setCount((count - 1 + logement.pictures.length) % logement.pictures.length); // Passage à l'image précédente
        }
    };

    const logo_container = logement.pictures ? logement.pictures[count] : null; // Image à afficher

    // Créer les étoiles en fonction de la note
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} src={FULL_STAR} alt="full star" className="rate" />);
            } else {
                stars.push(<img key={i} src={EMPTY_STAR} alt="empty star" className="rate" />);
            }
        }
        return stars;
    };

    return (
        <div className="principale">
            <Header />

            <div className="carroussel">
                <div className="logo_container">
                    <img src={logo_container} alt="" className="logo" />
                    <img
                        src={arrow_back}
                        alt="prev"
                        className="arrow_back_carroussel"
                        onClick={PreviousImage}
                    />
                    <img
                        src={arrow_forward}
                        alt="next"
                        className="arrow_forward_carroussel"
                        onClick={NextImage}
                    />
                </div>

                <div className="title">{logement.title}</div>
                <div className="location">{logement.location}</div>

                <div className="tags">
                    {logement.tags?.map((item) => (
                        <div className="item" key={item}>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="Rates_and_host">
                    <div className="host">
                        <div className="host_name">{logement.host?.name}</div>
                        <img
                            src={logement.host?.picture}
                            alt="profil"
                            className="profil"
                        />
                    </div>

                    <div className="Rates">
                        {/* Afficher les étoiles en fonction de la note */}
                        <div className="stars">
                            {renderStars(parseInt(logement.rating))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Utilisation du Collapse pour la description */}
            <Collapse title="Description" content={logement.description} />

            {/* Utilisation du Collapse pour les équipements */}
            <Collapse
                title="Equipements"
                content={logement.equipments?.map((equipement, index) => (
                    <ul key={index}>
                        <li>{equipement}</li>
                    </ul>
                ))}
            />

            <Footer />
        </div>
    );
}

export default Logement;

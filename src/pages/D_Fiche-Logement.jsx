// src/pages/Logement.jsx

// Importation des hooks de React Router pour accéder aux paramètres de l'URL et naviguer entre les pages
import { useParams, useNavigate } from "react-router-dom";

// Importation des hooks de React pour gérer l'état local et les effets de bord
import { useEffect, useState } from "react";

// Importation des composants personnalisés pour l'en-tête et le pied de page
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

// Importation des fichiers CSS pour le style du composant
import '../Style/Header.css';
import '../Style/Fiche-Logement.css';

// Importation du composant Collapse pour les sections déroulantes
import Collapse from '../Components/Collapse';

// Importation des images utilisées dans le carrousel et pour les évaluations
import arrow_forward from '../Images/arrow_forward.svg';
import arrow_back from '../Images/arrow_back_ios-24px 1.svg';
import FULL_STAR from '../Images/full_star.svg';
import EMPTY_STAR from '../Images/empty_star.svg';

function Logement() {
    // Récupération de l'ID du logement depuis les paramètres de l'URL
    const { id } = useParams();

    // Hook pour naviguer vers d'autres pages
    const navigate = useNavigate();

    // État local pour stocker la liste des logements
    const [logements, setLogements] = useState([]);

    // État local pour gérer l'affichage du chargement
    const [loading, setLoading] = useState(true);

    // État local pour gérer les erreurs lors du chargement des données
    const [error, setError] = useState(null);

    // État local pour suivre l'index de l'image affichée dans le carrousel
    const [count, setCount] = useState(0);

    // Effet de bord pour charger les données des logements lors du montage du composant
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

    // Recherche du logement correspondant à l'ID dans la liste des logements
    const logement = logements.find((item) => item.id === id);

    // Affichage d'un message de chargement si les données sont en cours de récupération
    if (loading) return <div>Chargement...</div>;

    // Affichage d'un message d'erreur si une erreur est survenue lors du chargement des données
    if (error) return <div>{error}</div>;

    // Redirection vers la page 404 si aucun logement ne correspond à l'ID fourni
    if (!logement) {
        navigate("/404", { replace: true });
        return null;
    }

    // Vérification s'il y a plusieurs images pour activer le carrousel
    const hasMultipleImages = logement.pictures && logement.pictures.length > 1;

    // Fonction pour passer à l'image suivante dans le carrousel
    const NextImage = () => {
        if (hasMultipleImages) {
            setCount((count + 1) % logement.pictures.length);
        }
    };

    // Fonction pour revenir à l'image précédente dans le carrousel
    const PreviousImage = () => {
        if (hasMultipleImages) {
            setCount((count - 1 + logement.pictures.length) % logement.pictures.length);
        }
    };

    // Sélection de l'image actuelle à afficher dans le carrousel
    const logo_container = logement.pictures ? logement.pictures[count] : null;

    // Fonction pour générer les étoiles de notation en fonction de la note du logement
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
            {/* Affichage de l'en-tête de la page */}
            <Header />

            {/* Section du carrousel d'images */}
            <div className="carroussel">
                <div className="logo_container">
                    {/* Affichage de l'image actuelle du carrousel */}
                    <img src={logo_container} alt="" className="logo" />
                    {/* Affichage des flèches de navigation si plusieurs images sont disponibles */}
                    {hasMultipleImages && (
                        <>
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
                        </>
                    )}
                </div>

                {/* Affichage du titre et de la localisation du logement */}
                <div className="title">{logement.title}</div>
                <div className="location">{logement.location}</div>

                {/* Affichage des tags associés au logement */}
                <div className="tags">
                    {logement.tags?.map((item) => (
                        <div className="item" key={item}>
                            {item}
                        </div>
                    ))}
                </div>

                {/* Section affichant les informations de l'hôte et la notation */}
                <div className="Rates_and_host">
                    <div className="host">
                        {/* Affichage du nom de l'hôte */}
                        <div className="host_name">{logement.host?.name}</div>
                        {/* Affichage de la photo de l'hôte */}
                        <img
                            src={logement.host?.picture}
                            alt="profil"
                            className="profil"
                        />
                    </div>

                    {/* Affichage de la notation sous forme d'étoiles */}
                    <div className="Rates">
                        <div className="stars">
                            {renderStars(parseInt(logement.rating))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Utilisation du composant Collapse pour afficher la description du logement */}
            <Collapse title="Description" content={logement.description} />

            {/* Utilisation du composant Collapse pour afficher les équipements du logement */}
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

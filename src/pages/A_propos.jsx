// Importation du composant Header pour l'en-tête de la page
import Header from '../Components/Header.jsx';

// Importation des fichiers CSS pour le style de l'en-tête et de la page À propos
import '../Style/Header.css';
import '../Style/A_propos.css';

// Importation du composant Footer pour le pied de page
import Footer from '../Components/Footer.jsx';

// Importation de l'image utilisée dans la page À propos
import Image_a_propos from '../Images/Image_a-propos.jpg';

// Importation du composant Collapse pour les sections déroulantes
import Collapse from '../Components/Collapse.jsx';

// Définition du composant fonctionnel A_propos
function A_propos() {
    return (
        <div className='container'>
            {/* Affichage de l'en-tête de la page */}
            <Header />

            {/* Affichage de l'image principale de la page À propos */}
            <img src={Image_a_propos} alt="" className="Image_a_propos" />

            {/* Section contenant les éléments déroulants pour présenter les valeurs de Kasa */}
            <div className='menu_deroulant'>
                {/* Composant Collapse pour la section "Fiabilité" */}
                <Collapse 
                    title="Fiabilité" 
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                {/* Composant Collapse pour la section "Respect" */}
                <Collapse 
                    title="Respect" 
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                {/* Composant Collapse pour la section "Service" */}
                <Collapse 
                    title="Service" 
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                {/* Composant Collapse pour la section "Sécurité" */}
                <Collapse 
                    title="Sécurité" 
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
                />
            </div>

            <Footer />
        </div>
    );
}

// Exportation du composant A_propos pour utilisation dans d'autres parties de l'application
export default A_propos;

import Header from '../Components/Header.jsx';
import '../Style/Header.css';
import '../Style/A_propos.css';
import Footer from '../Components/Footer.jsx';
import Image_a_propos from '../Images/Image_a-propos.jpg';
import Collapse from '../Components/Collapse.jsx';

function A_propos() {
    return (
        <div className='container'>
            <Header />
            <img src={Image_a_propos} alt="" className="Image_a_propos" />
            <div className='menu_deroulant'>
                <Collapse 
                    title="Fiabilité" 
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Collapse 
                    title="Respect" 
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse 
                    title="Service" 
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Collapse 
                    title="Sécurité" 
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
                />
            </div>
            <Footer />
        </div>
    );
}

export default A_propos;

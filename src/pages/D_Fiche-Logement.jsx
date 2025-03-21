import { useParams } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import { useState } from 'react';
import '../Style/Header.css';
import '../Style/Fiche-Logement.css';
import Footer from '../Components/Footer.jsx';
import arrow_forward from '../Images/arrow_forward.svg';
import arrow_back from '../Images/arrow_back_ios-24px 1.svg';
import ARROW_UP from '../Images/arrow_up.svg';
import ARROW_BACK from '../Images/arrow_back.svg';
import RATE1 from '../Images/RATE1.svg';
import RATE2 from '../Images/RATE2.svg';
import RATE3 from '../Images/RATE3.svg';
import RATE4 from '../Images/RATE4.svg';
import RATE5 from '../Images/RATE5.svg';

function Logement() {
    const [isClicked, setIsClicked] = useState(false); // Dropdown description
    const [isClicked2, setIsClicked2] = useState(false); // Dropdown équipements
    const [Description, setDescription] = useState(ARROW_BACK);
    const [Equipements, setEquipements] = useState(ARROW_BACK);
    const [count, setCount] = useState(0);

    const toggleArrowDescription = () => {
        setDescription(Description === ARROW_BACK ? ARROW_UP : ARROW_BACK);
        setIsClicked(!isClicked);
    };

    const toggleArrowEquipements = () => {
        setEquipements(Equipements === ARROW_BACK ? ARROW_UP : ARROW_BACK);
        setIsClicked2(!isClicked2);
    };

    // Fonction pour afficher l'image suivante dans le carrousel
    const NextImage = () => {
        // On vérifie d'abord qu'il y a bien des images dans 'detail.pictures'
        if (detail.pictures && detail.pictures.length > 0) {
            // On incrémente 'count' pour passer à l'image suivante
            // Le modulo (%) permet de revenir à la première image quand on atteint la dernière
            setCount((count + 1) % detail.pictures.length);
        }
    };

    const PreviousImage = () => {
        if (detail.pictures && detail.pictures.length > 0) {
            setCount((count - 1 + detail.pictures.length) % detail.pictures.length);
        }
    };

    let detail = [];
    // 'questionNumber' récupère les paramètres de l'URL, ici l'id du logement
    const questionNumber = useParams();

    // On récupère les données stockées dans le localStorage sous la clé 'items'
    // Si les données ne sont pas présentes, on renvoie un tableau vide
    const localS = JSON.parse(localStorage.getItem('items') || '[]');

    // On boucle à travers chaque élément dans 'localS' pour trouver le logement correspondant à l'id dans l'URL
    for (let i = 0; i < localS.length; i++) {
        // Si l'id du logement dans l'URL correspond à l'id d'un logement dans 'localS', on récupère ses détails
        if (questionNumber.id === localS[i].id) {
            detail = localS[i];
        }
    }

    const logo_container = detail.pictures ? detail.pictures[count] : null;

    return (
        <div className="principale">
            <Header />
            <div className="carroussel">
                <div className="logo_container">
                    <img src={logo_container} alt="" className="logo" />
                    <img src={arrow_back} alt="prev" className="arrow_back_carroussel" onClick={PreviousImage} />
                    <img src={arrow_forward} alt="next" className="arrow_forward_carroussel" onClick={NextImage} />
                </div>
                <div className="title">{detail.title}</div>
                <div className="location">{detail.location}</div>
                <div className="tags">
                    {detail.tags?.map((item) => (
                        <div className="item" key={item}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className='Rates_and_host'>
                    <div className="host">
                        <div className='host_name'> {detail.host?.name} </div>
                        <img src={detail.host?.picture} alt="profil" className="profil" />
                    </div>
                    <div className="Rates">
                        {detail.rating === '1' ? (
                            <img src={RATE1} alt="" className="rate" />
                        ) : detail.rating === '2' ? (
                            <img src={RATE2} alt="" className="rate" />
                        ) : detail.rating === '3' ? (
                            <img src={RATE3} alt="" className="rate" />
                        ) : detail.rating === '4' ? (
                            <img src={RATE4} alt="" className="rate" />
                        ) : (
                            <img src={RATE5} alt="" className="rate" />
                        )}
                    </div>
                </div>

                <div className="dropdown">
                    <div className="dropdown-section">
                        <div className="dropdown-header" onClick={toggleArrowDescription}>
                            Description
                            <img src={Description} alt="arrow" className="arrow_back" />
                        </div>
                        {isClicked && <div className="dropdown-content">{detail.description}</div>}
                    </div>

                    <div className="dropdown-section">
                        <div className="dropdown-header" onClick={toggleArrowEquipements}>
                            Equipements
                            <img src={Equipements} alt="arrow" className="arrow_back" />
                        </div>
                        {isClicked2 && (
                            <div className="dropdown-content">
                                {detail.equipments?.map((equipement, index) => (
                                    <ul key={index}>
                                        <li className="Equipements_text">{equipement}</li>
                                    </ul>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Logement;

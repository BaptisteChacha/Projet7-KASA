import Header from '../Components/Header.jsx';
import '../Style/Header.css';
import ARROW_UP from '../Images/arrow_up.svg';
import ARROW_BACK from '../Images/arrow_back.svg';
import { useState } from "react";
import '../Style/A_propos.css';
import Footer from '../Components/Footer.jsx';
import Image_a_propos from '../Images/Image_a-propos.jpg';

function A_propos() {
    const [InfoFiabilite, setInfoFiabilite] = useState(ARROW_BACK);
    const [InfoRespect, setInfoRespect] = useState(ARROW_BACK);
    const [InfoSecurite, setInfoSecurite] = useState(ARROW_BACK);
    const [InfoService, setInfoService] = useState(ARROW_BACK);
    const [isClicked, setIsClicked] = useState(false);

    const toggleArrowInfoFiabilite = () => {
        setInfoFiabilite(InfoFiabilite === ARROW_BACK ? ARROW_UP : ARROW_BACK);
        setIsClicked(!isClicked);
    };

    const toggleArrowInfoRespect = () => {
        setInfoRespect(InfoRespect === ARROW_BACK ? ARROW_UP : ARROW_BACK);
        setIsClicked(!isClicked);
    };

    const toggleArrowInfoSecurite = () => {
        setInfoSecurite(InfoSecurite === ARROW_BACK ? ARROW_UP : ARROW_BACK);
        setIsClicked(!isClicked);
    };

    const toggleArrowInfoService = () => {
        setInfoService(InfoService === ARROW_BACK ? ARROW_UP : ARROW_BACK);
        setIsClicked(!isClicked);
    };

    return (
        <div className='container'>
            <Header />
            <img src={Image_a_propos} alt="" className="Image_a_propos" />
            <div className='menu_deroulant'>
                <div className={isClicked ? 'classe-clic' : 'fiabilité'}>
                    <span className="text_fiabilite">Fiabilité</span>
                    <img src={InfoFiabilite} alt='' className='arrow_back' onClick={toggleArrowInfoFiabilite} />
                </div>
                {InfoFiabilite === ARROW_UP ? (
                    <div className='texte_page_a_propos'>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </div>
                ) : ""}

                <div className={isClicked ? 'classe-clic' : 'respect'}>
                    <span className="text_respect">Respect</span>
                    <img src={InfoRespect} alt='' className='arrow_back' onClick={toggleArrowInfoRespect} />
                </div>
                {InfoRespect === ARROW_UP ? (
                    <div className='texte_page_a_propos'>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </div>
                ) : ""}

                <div className={isClicked ? 'classe-clic' : 'service'}>
                    <span className="text_service">Service</span>
                    <img src={InfoService} alt='' className='arrow_back' onClick={toggleArrowInfoService} />
                </div>
                {InfoService === ARROW_UP ? (
                    <div className='texte_page_a_propos'>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </div>
                ) : ""}

                <div className={isClicked ? 'classe-clic' : 'securité'}>
                    <span className="text_securite">Sécurité</span>
                    <img src={InfoSecurite} alt='' className='arrow_back' onClick={toggleArrowInfoSecurite} />
                </div>
                {InfoSecurite === ARROW_UP ? (
                    <div className='texte_page_a_propos'>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </div>
                ) : ""}
            </div>
            <Footer />
        </div>
    );
}

export default A_propos;

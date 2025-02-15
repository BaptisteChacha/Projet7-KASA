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

    const NextImage = () => {
        if (detail.pictures && detail.pictures.length > 0) {
            setCount((count + 1) % detail.pictures.length);
        }
    };

    const PreviousImage = () => {
        if (detail.pictures && detail.pictures.length > 0) {
            setCount((count - 1 + detail.pictures.length) % detail.pictures.length);
        }
    };

    let detail = [];
    const questionNumber = useParams();
    const localS = JSON.parse(localStorage.getItem('items') || '[]');

    for (let i = 0; i < localS.length; i++) {
        if (questionNumber.id === localS[i].id) {
            detail = localS[i];
        }
    }

    const test = detail.pictures ? detail.pictures[count] : null;

    return (
        <div className="principale">
            <Header />
            <div className="carroussel">
                <div className="test">
                    <img src={test} alt="" className="logo" />
                    <img src={arrow_back} alt="prev" className="arrow_back_carroussel" onClick={PreviousImage} />
                    <img src={arrow_forward} alt="next" className="arrow_forward_carroussel" onClick={NextImage} />
                </div>
                <div className="title">
                    {detail.title}
                    </div>
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
                       <div className='host_name'> {detail.host?.name} </div> <img src={detail.host?.picture} alt="profil" className="profil" />
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
                    <div className="description">
                        Description{' '}
                        <img
                            src={Description}
                            alt="arrow"
                            className="arrow_back"
                            onClick={toggleArrowDescription}
                        />
                        {isClicked && <div className="description_content">{detail.description}</div>}
                    </div>
                    <div className="equipements">
                        Equipements{' '}
                        <img
                            src={Equipements}
                            alt="arrow"
                            className="arrow_back"
                            onClick={toggleArrowEquipements}
                        />
                        {isClicked2 && (
                            <div className="equipements_content">
                                {detail.equipments?.map((equipement, index) => (
                                    <ul key={index}>
                                        <li className="Equipements_text">{equipement}</li>
                                    </ul>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div >
            <div className={`footer-container ${isClicked || isClicked2 ? 'menu-open' : ''}`}>
    <Footer />
            </div>
        </div>
    );
}

export default Logement;

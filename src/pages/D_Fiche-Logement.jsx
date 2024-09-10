import { useParams } from 'react-router-dom'
import Header from '../Components/Header.jsx'
import {useState} from "react"
import '../Style/Header.css';
import '../Style/Fiche-Logement.css';
import RATE1 from '../Images/RATE1.svg';
import RATE2 from '../Images/RATE2.svg';
import RATE3 from '../Images/RATE3.svg';
import RATE4 from '../Images/RATE4.svg';
import RATE5 from '../Images/RATE5.svg';
import ARROW_UP from '../Images/arrow_up.svg';
import ARROW_BACK from '../Images/arrow_back.svg';
import Footer from '../Components/Footer.jsx';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import  arrow_forward from '../Images/arrow_forward.svg';
import  arrow_back from '../Images/arrow_back_ios-24px 1.svg';

const StyledLinkFooter = styled(Link)
`
    margin-top: 40%;
    margin-left: 1%;
    width: 85%;
    position: relative;
`

function Logement() {
    //On cree le usestate pour chaque partie
    const [isClicked, setIsClicked] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)
    const [Description, setDescription] = useState(ARROW_BACK) 
    const [Equipements, setEquipements] = useState(ARROW_BACK) 
    const [count, setCount] = useState(0)
    //On crée une fonction qui change le sens de la fleche au clic
    const toggleArrowDescription = () => {
        setDescription(Description === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(detail.description)
        setIsClicked(isClicked === true ? false : true)
        console.log(isClicked)
    }

    const toggleArrowEquipements = () => {
        setEquipements(Equipements === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(Equipements)
        setIsClicked(isClicked === true ? false : true)
        console.log(isClicked)
    }
    //On crée une fonction pour mettre en place le caroussel
    const NextImage = () => {
        //On verifie que detail.picture existe bien et que sa longueur n'est pas null, sinon on affiche un message d'erreur
        if (!detail || !detail.pictures || detail.pictures.length === 0) {
            console.error("detail or detail.pictures is not defined or empty");
            return;
            //On verifie que le type de count est bien un entier, qu'il n'est pas inferieur a 0 et pas superieur a la taille du tableau
        }    if (typeof count !== 'number' || count < 0 || count >= detail.pictures.length) {
            console.error("count is out of bounds");
            return;
        }    console.log('Bonjour');
        console.log(detail.pictures.length);
        console.log(detail.pictures[count]);
        //Si count est inferieur a la taille du tableau -1 on augmente le compteur de 1
        console.log(count);    if (count < detail.pictures.length - 1) {
            setCount(count + 1);
        } else {
            //Sinon on lui assigne la valeur 0
            setCount(0);
        }
    };
    const PreviousImage = () => {
        console.log('Au revoir')
        setCount(count - 1)
    }

    //On crée un tableau vide
    let detail = [];
    //On recupère le localstorage 
    var localS = JSON.parse(localStorage.getItem("items"));
    const questionNumber = useParams();
    //Tant que i est inferieur a la taille du localstorage on l'incremente de 
    for (let i = 0; i< localS.length; i++){
        //On verifie que l'id selectionné précédement corresponde bien a celui trouvé dans le localstorage
        if(questionNumber.id === localS[i].id){
            //On enregistre les données de cet utilisateur dans detail
            detail = localS[i];
            console.log(detail)
        }
    }
    const test = detail.pictures[count]
    return (
        //On utilise les differentes données dans detail pour mettre la page logement a jour en fonction de l'utilisateur
        <body>
        <div className='principale'>
            <Header></Header>
            <div className='carroussel'> 
            <div className='test' >
            <img src={test}  class='logo' />
            <img src={arrow_back}  Class='arrow_back' onClick={PreviousImage} />
            <img src={arrow_forward}  Class='arrow_forward' onClick={NextImage} />
            </div>
            <div className='title'>{detail.title} 
            <div className='host'>{detail.host.name}  <img src={detail.host.picture} alt="profil" class='profil'></img> 
            </div>
            <div className='location'>{detail.location}</div>
            <div className='Rates'>
            {detail.rating === "1" ? <img src={RATE1} alt="" ClassName='rate' />
         : detail.rating === "2" ? <img src={RATE2} alt="" ClassName='rate' />
         : detail.rating === "3" ? <img src={RATE3} alt="" ClassName='rate' />
         : detail.rating === "4" ? <img src={RATE4} alt="" ClassName='rate' />
         : <img src={RATE5} alt="" ClassName='rate' /> 
    } </div> 
    </div>
    <div ClassName='tags'>
            {detail.tags.map((item) => (
                <div className='item'>{item} </div> 
        ))} </div>
        <div className='dropdown'>
           <div className={isClicked ? 'classe-clic-description' : 'description'}> Description <img src={Description} alt="" ClassName='arrow_back'   onClick={toggleArrowDescription} /> 
           { Description === ARROW_UP ?  <div className='description_content'> 
            {detail.description}
        </div>
           : console.log('au revoir') }
              </div> 
           <div className={isClicked ? 'classe-clic-equipements' : 'equipements'}> Equipements <img src={Equipements} alt="" ClassName='arrow_back' onClick={toggleArrowEquipements}/> 
           { Equipements === ARROW_UP ?  <div className='equipements_content'> 
            {detail.equipments.map((equipements) => (
                <ul>
                    <li className='Equipements_text'>{equipements}</li>
                </ul>
                
            ))}
        </div>
           : console.log('au revoir') } </div> 
            </div>
        </div>
       
        </div>
        <div className='container'>
        <StyledLinkFooter> <Footer></Footer> </StyledLinkFooter>
        </div>
        </body>
        
    )
}

export default Logement
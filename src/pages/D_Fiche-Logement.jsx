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
//import COLLAPSE from '../Collapse.svg';
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

    const [Description, setDescription] = useState('ARROW_BACK') 
    const [Equipements, setEquipements] = useState('ARROW_BACK') 
    const [count, setCount] = useState(0)

    const toggleArrowDescription = () => {
        setDescription(Description === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(Description)
    }

    const toggleArrowEquipements = () => {
        setEquipements(Equipements === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(Equipements)
    }
    const NextImage = () => {
        if (!detail || !detail.pictures || detail.pictures.length === 0) {
            console.error("detail or detail.pictures is not defined or empty");
            return;
        }    if (typeof count !== 'number' || count < 0 || count >= detail.pictures.length) {
            console.error("count is out of bounds");
            return;
        }    console.log('Bonjour');
        console.log(detail.pictures.length);
        console.log(detail.pictures[count]);
        console.log(count);    if (count < detail.pictures.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    };
    const PreviousImage = () => {
        console.log('Au revoir')
        setCount(count - 1)
    }


    let detail = [];
    var localS = JSON.parse(localStorage.getItem("items"));
    const questionNumber = useParams();
    for (let i = 0; i< localS.length; i++){
        if(questionNumber.id === localS[i].id){
            detail = localS[i];
            console.log(detail)
        }
    }
    const test = detail.pictures[count]
    return (
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
            <div className='host'>{detail.host.name}  <img src={detail.host.picture[count]} alt="profil" class='profil'></img> 
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
           <div className='description'> Description <img src={Description} alt="" ClassName='arrow_back'   onClick={toggleArrowDescription} /> 
             { Description === ARROW_UP ?  <div className='Description_text'> {detail.description} </div>
           : console.log('au revoir') } </div> 
           <div className='equipements'> Equipements <img src={Equipements} alt="" ClassName='arrow_back' onClick={toggleArrowEquipements}/> 
           { Equipements === ARROW_UP ?  <div> 
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
        <StyledLinkFooter> <Footer></Footer> </StyledLinkFooter>
        </body>
    )
}

export default Logement
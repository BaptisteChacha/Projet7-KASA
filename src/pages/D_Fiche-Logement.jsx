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

function Logement() {

    const [Description, setDescription] = useState('ARROW_BACK') 
    const [Equipements, setEquipements] = useState('ARROW_BACK') 

    const toggleArrowDescription = () => {
        setDescription(Description === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(Description)
    }

    const toggleArrowEquipements = () => {
        setEquipements(Equipements === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(Equipements)
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
    return (
        <body>
        <div>
            <Header></Header>
            <div class='carroussel'> 
            <img src={detail.cover} alt="" className='logo' />
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
        </body>
    )
}

export default Logement
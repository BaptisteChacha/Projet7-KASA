import Header from '../Components/Header.jsx'
import '../Style/Header.css';
import ARROW_UP from '../Images/arrow_up.svg';
import ARROW_BACK from '../Images/arrow_back.svg';
import {useState} from "react"
import '../Style/Fiche-Logement.css';
import '../Style/A_propos.css';
import Footer from '../Components/Footer.jsx';
import Img2 from '../Images/IMG2.png'


function A_propos() {
    let [InfoFiabilite, setInfoFiabilite] = useState('ARROW_BACK') 
    const [InfoRespect, setInfoRespect] = useState('ARROW_BACK') 
    const [InfoSecurite, setInfoSecurite] = useState('ARROW_BACK') 
    const [InfoService, setInfoService] = useState('ARROW_BACK') 


    const toggleArrowInfoFiabilite = () => {
        setInfoFiabilite(InfoFiabilite === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(InfoFiabilite)
    } 
    const toggleArrowInfoRespect = () => {
        setInfoRespect(InfoRespect === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(InfoRespect)
    } 
    const toggleArrowInfoSecurite = () => {
        setInfoSecurite(InfoSecurite === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(InfoSecurite)
    } 
    const toggleArrowInfoService = () => {
        setInfoService(InfoService === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(InfoService)
    } 
    

    return (
        <div>
            <Header></Header>
            
            <div className='rectangle'>  <img src={Img2} alt=""  /> </div>
            <div className='menu_deroulant'>
            <div className='fiabilité'> Fiabilité <img src={ARROW_BACK} alt='' ClassName='arrow_back' onClick={toggleArrowInfoFiabilite}/> 
            { InfoFiabilite === ARROW_UP ?  <div className='Description_text'> Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
           : console.log('au revoir') }
            </div>
            <div className='respect'> Respect <img src={ARROW_BACK} alt='' ClassName='arrow_back_respect' onClick={toggleArrowInfoRespect}/>
            { InfoRespect === ARROW_UP ?  <div className='Description_text'> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
           : console.log('au revoir') }
            </div>
            <div className='service'> Service  <img src={InfoService} alt='' ClassName='arrow_back' onClick={toggleArrowInfoService}/> 
            { InfoService === ARROW_UP ?  <div className='Description_text'> Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
           : console.log('au revoir') }
            </div>
            <div className='securité'>  Securité  <img src={InfoSecurite} alt='' ClassName='arrow_back' onClick={toggleArrowInfoSecurite}/> 
            { InfoSecurite === ARROW_UP ?  <div className='Description_text'> La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
           : console.log('au revoir') }
             </div>
            </div>
            <Footer></Footer>
             </div>
       
    )
    
}
 
export default A_propos
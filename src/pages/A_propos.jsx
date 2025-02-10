import Header from '../Components/Header.jsx'
import '../Style/Header.css';
import ARROW_UP from '../Images/arrow_up.svg';
import ARROW_BACK from '../Images/arrow_back.svg';
import {useState} from "react"
import '../Style/A_propos.css';
import Img2 from '../Images/IMG2.png'
import Footer from '../Components/Footer.jsx';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLinkFooter = styled(Link)
`
    margin-top: 48%;
    margin-left: 1%;
    width: 100%
`

function A_propos() {
    
    let [InfoFiabilite, setInfoFiabilite] = useState(ARROW_BACK) 
    const [InfoRespect, setInfoRespect] = useState(ARROW_BACK) 
    const [InfoSecurite, setInfoSecurite] = useState(ARROW_BACK) 
    const [InfoService, setInfoService] = useState(ARROW_BACK) 
    

    const toggleArrowInfoFiabilite = () => {
        setInfoFiabilite(InfoFiabilite === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(InfoFiabilite)    
        setIsClicked(isClicked === true ? false : true)
        console.log(isClicked)    
    } 
    const toggleArrowInfoRespect = () => {
        setInfoRespect(InfoRespect === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(InfoRespect)
        setIsClicked(isClicked === true ? false : true)
        console.log(isClicked)
    } 
    const toggleArrowInfoSecurite = () => {
        setInfoSecurite(InfoSecurite === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(InfoSecurite)
        setIsClicked(isClicked === true ? false : true)
        console.log(isClicked)
    } 
    const toggleArrowInfoService = () => {
        setInfoService(InfoService === ARROW_BACK ? ARROW_UP : ARROW_BACK)
        console.log(InfoService)
        setIsClicked(isClicked === true ? false : true)
        console.log(isClicked)
    } 
    


    const [isClicked, setIsClicked] = useState(false)
  /*  const click =() => {
        setIsClicked(isClicked == true ? false : true)
    }*/


    return (
        <div className='container'>
            <Header></Header>
            <div className='menu_deroulant'>
                
           
             <div className= {isClicked ? 'classe-clic' : 'fiabilité'}> Fiabilité <img src={InfoFiabilite} alt='' ClassName='arrow_back' onClick={ toggleArrowInfoFiabilite }/> </div>    
             {InfoFiabilite === ARROW_UP ?   <div className='Description_text'> 
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. </div>
           : console.log('au revoir') }        
                        
           
            <div className= {isClicked ? 'classe-clic' : 'respect'}> Respect <img src={InfoRespect} alt='' ClassName='arrow_back' onClick={ toggleArrowInfoRespect }/>   </div>
            { InfoRespect === ARROW_UP ?  <div className='Description_text'>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. </div>
           : console.log('au revoir') }
          
            

            <div className={isClicked ? 'classe-clic' : 'service'}> Service  <img src={InfoService} alt='' ClassName='arrow_back' onClick={ toggleArrowInfoService }/> </div>
            { InfoService === ARROW_UP ?  <div className='Description_text'>
                 Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. </div>
           : console.log('au revoir') }
            
            
           
            <div className={isClicked ? 'classe-clic' : 'securité'}>  Securité  <img src={InfoSecurite} alt='' ClassName='arrow_back' onClick={ toggleArrowInfoSecurite }/> </div>
            { InfoSecurite === ARROW_UP ?  <div className='texte_page_a_propos'> 
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes  </div>
           : console.log('au revoir') }

            </div>
            <Footer></Footer>
             </div>
       
    )
    
}
 
export default A_propos
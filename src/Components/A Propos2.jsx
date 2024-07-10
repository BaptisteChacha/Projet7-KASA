import Header from '../Components/Header.jsx'
import '../Style/Header.css';
import ARROW_UP from '../Images/arrow_up.svg';
import ARROW_BACK from '../Images/arrow_back.svg';
import {UseState} from "react"
import '../Style/Fiche-Logement.css';
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
    
    
    let [InfoFiabilite, setInfoFiabilite] = UseState('ARROW_BACK') 
    const [InfoRespect, setInfoRespect] = UseState('ARROW_BACK') 
    const [InfoSecurite, setInfoSecurite] = UseState('ARROW_BACK') 
    const [InfoService, setInfoService] = UseState('ARROW_BACK') 
    

    const handleRotate = () => {
        alert('bonjour')
    }

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
        
            <div className='menu_deroulant'>


             <div className='rotating-box'> Fiabilité <img src={InfoFiabilite} alt='' ClassName='arrow_back' onClick={ toggleArrowInfoFiabilite }/> 
            
            { InfoFiabilite === ARROW_UP ?  <div className='description_content'> 
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>
           : console.log('au revoir') }
            
       
              </div> 
              </div>
              </div>
    )}

            
            
            
         
export default A_propos
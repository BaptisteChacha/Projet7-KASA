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

function toggle()
{   

    let d1 = document.getElementById("divContent");
    const [Rotate, setRotate] = UseState(0)
  
	if (d1.style.visibility==="hidden")
	{
		// Contenu caché, le montrer
		 d1.style.visibility = "visible";
		 d1.style.height = "auto";	// Optionnel rétablir la hauteur
         setRotate(180)
	}
	else
	{
		// Contenu visible, le cacher
		d1.style.visibility = "hidden";
		d1.style.height = "0";			// Optionnel libérer l'espace
        //setRotate(180)
	}
    console.log(d1.style.visibility)
}


function toggle2()
{
    let d2 = document.getElementById("divContent2");

	if (d2.style.visibility==="hidden" || d2.style.visibility===null)
	{
		// Contenu caché, le montrer
		 d2.style.visibility = "visible";
		 d2.style.height = "auto";			// Optionnel rétablir la hauteur
	}
	else
	{
		// Contenu visible, le cacher
		d2.style.visibility = "hidden";
		d2.style.height = "0";			// Optionnel libérer l'espace
	}
    console.log(d2.style.visibility)
}


function toggle3()
{
    let d3 = document.getElementById("divContent3");

	if (d3.style.visibility==="hidden" || d3.style.visibility===null)
	{
		// Contenu caché, le montrer
		 d3.style.visibility = "visible";
		 d3.style.height = "auto";			// Optionnel rétablir la hauteur
	}
	else
	{
		// Contenu visible, le cacher
		d3.style.visibility = "hidden";
		d3.style.height = "0";			// Optionnel libérer l'espace
	}
    console.log(d3.style.visibility)
}


function toggle4()
{
    let d4 = document.getElementById("divContent4");

	if (d4.style.visibility==="hidden" || d4.style.visibility===null)
	{
		// Contenu caché, le montrer
		 d4.style.visibility = "visible";
		 d4.style.height = "auto";			// Optionnel rétablir la hauteur
	}
	else
	{
		// Contenu visible, le cacher
		d4.style.visibility = "hidden";
		d4.style.height = "0";			// Optionnel libérer l'espace
	}
    console.log(d4.style.visibility)
}



function A_propos() {
    let d1 = document.getElementById("divContent1");
    
    let [InfoFiabilite, setInfoFiabilite] = UseState('ARROW_BACK') 
    const [InfoRespect, setInfoRespect] = UseState('ARROW_BACK') 
    const [InfoSecurite, setInfoSecurite] = UseState('ARROW_BACK') 
    const [InfoService, setInfoService] = UseState('ARROW_BACK') 
    
     
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


             <div className='fiabilité'> Fiabilité <img src={ARROW_BACK} alt='' ClassName='arrow_back' onClick={ toggle }/> 
            { InfoFiabilite === ARROW_UP ?  <div className='Description_text'></div>
           : console.log('au revoir') }
            </div>
            <div id="divContent">  Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
            
            
    
            
            
            
            
            <div className='respect'> Respect <img src={ARROW_BACK} alt='' ClassName='arrow_back_respect' onClick={ toggle2 }/>
            { InfoRespect === ARROW_UP ?  <div className='Description_text'></div>
           : console.log('au revoir') }
            </div>
            <div id="divContent2">  La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>


            <div className='service'> Service  <img src={InfoService} alt='' ClassName='arrow_back' onClick={ toggle3 }/> 
            { InfoService === ARROW_UP ?  <div className='Description_text'> </div>
           : console.log('au revoir') }
            </div>
            <div id="divContent3">  Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
            
           
            <div className='securité'>  Securité  <img src={InfoSecurite} alt='' ClassName='arrow_back' onClick={ toggle4 }/> 
            { InfoSecurite === ARROW_UP ?  <div className='Description_text'> .</div>
           : console.log('au revoir') }
             </div>
             <div id="divContent4">  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</div>

            </div>
            <Footer></Footer>
             </div>
       
    )
    
}
 
export default A_propos
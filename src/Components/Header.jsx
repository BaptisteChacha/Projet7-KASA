import { Link } from 'react-router-dom'
import '../Style/Header.css';
import  LOGO from '../Images/LOGO.svg';




function Header() {
    return (
        <div id='divPrincipale' >
        <img src={LOGO} alt="" />
        <nav>
            <Link className='accueil_link' to="/">Accueil</Link>
            <Link className='a_propos_link' to="/A_Propos">A propos</Link> 
        </nav>
        </div>
    )
}

export default Header
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../Style/Header.css';
import  LOGO from '../Images/LOGO.svg';


const StyledLink = styled(Link)`
display: flex;
width: 1240px;
height: 68px;
justify-content: center;
align-items: right;
gap: 720.678px;
`

function Header() {
    return (
        <div id='divPrincipale' >
        <img src={LOGO} alt="" ClassName='logo' />
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/A_Propos">A propos</StyledLink> 
        </nav>
        </div>
    )
}

export default Header
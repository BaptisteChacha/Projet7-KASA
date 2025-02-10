import  Vector from '../Images/Vector.svg';
import '../Style/Footer.css';
import Group from '../Images/Group.svg';
import  Vector_2 from '../Images/Vector_2.svg';
import  Vector_3 from '../Images/Vector_3.svg';

function Footer() {
    return (
        <footer className='divFooter' >
        <img src={Vector} alt="" ClassName='footer' /> 
        <img src={Group} alt="" ClassName='footer' />
        <img src={Vector_2} alt="" ClassName='footer' />
        <img src={Vector_3} alt="" ClassName='footer' /> <br></br>
        2020 Kasa, All right reserved
        </footer>
    )
}

export default Footer


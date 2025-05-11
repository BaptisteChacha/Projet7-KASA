import Header from '../Components/Header.jsx'
import '../Style/Header.css';
import '../Style/Erreur.css';

function Error() {
    return (
        <div>
            <Header></Header>
            <p className='erreur-404'> 404 </p>
            <h1 className='erreur'>Oups la page que vous demandez n'existe pas</h1>
            <a href='http://localhost:3000/'> <p className='retour-accueil'> Retour sur la page d'accueil </p> </a>
        </div>
    )
}
 
export default Error
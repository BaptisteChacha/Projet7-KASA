import Header from '../Components/Header.jsx'
import '../Header.css';

function Error() {
    return (
        <div>
            <Header></Header>
            <p Class='erreur-404'> 404 </p>
            <h1>Oups la page que vous demandez n'existe pas</h1>
            <a href='http://localhost:3000/'> <p Class='retour-accueil'> Retour sur la page d'accueil </p> </a>
        </div>
    )
}
 
export default Error
import Header from '../Components/Header.jsx'
import '../Header.css';

function Error() {
    return (
        <div>
            <Header></Header>
            <p class='erreur-404'> 404 </p>
            <h1>Oups la page que vous demandez n'existe pas</h1>
            <p class='retour-accueil'> Retour sur la page d'accueil </p>
        </div>
    )
}
 
export default Error
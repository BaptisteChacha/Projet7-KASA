import { Link } from 'react-router-dom'
import '../Style/Card.css';

function Card () {
    var localS = JSON.parse(localStorage.getItem("items"));
    console.log(localS[0])
    return (
        <div>
<section id='Cards'>
    <ul>
        {localS.map((item) => (
            <li key={ item.id }>
               <div Class='card'>
               <Link to={`/Logement/${item.id}`}>
                <div Class='img-home'>
                <img Class='img_location' src= {item.cover} alt=""/> </div>
                 <div className='text'> {item.title} </div> 
              </Link>
                </div>
            </li>
        ))}
        </ul>
</section>
        </div>
    )
}
export default Card




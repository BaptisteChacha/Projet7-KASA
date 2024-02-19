import { Link } from 'react-router-dom'
import '../Style/Card.css';

function Card () {
    var localS = JSON.parse(localStorage.getItem("items"));
    console.log(localS[0])
    return (
        <div>
<section id='Cards'>
        {localS.map((item) => (
            <li key={ item.id }>
               <div Class='card'>
               <Link to={`/Logement/${item.id}`}>
                <div ClassName='img-home'>
                <img Class='img_location' src= {item.cover} alt=""/> </div>
                 <div className='text'> {item.title} </div>
              </Link>
                </div>
            </li>
        ))}
</section>
        </div>
    )
}
export default Card




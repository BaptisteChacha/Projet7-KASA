import { Link } from 'react-router-dom'

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
                <img Class='img_location' src= {item.cover} alt=""  />
                 {item.title}
                </div>
              </Link>
                </div>
            </li>
        ))}
</section>
        </div>
    )
}
export default Card




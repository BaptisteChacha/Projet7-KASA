import { Link } from 'react-router-dom';
import '../Style/Card.css';

function Card() {
    let localS = JSON.parse(localStorage.getItem("items"));
    
    if (!localS || localS.length === 0) {
        console.error("LocalStorage 'items' is empty.");
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => window.localStorage.setItem("items", JSON.stringify(data)))
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <section id='Cards'>
                <ul className='list_card'>
                    {localS && localS.map((item) => (
                        <li key={item.id}>
                            <div>
                                <Link to={`/Logement/${item.id}`}>
                                    <div className='img-home'>
                                        <div className='text'>{item.title}</div>
                                        <img className='img_location' src={item.cover} alt="" />
                                    </div>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Card;

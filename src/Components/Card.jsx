import { Link } from 'react-router-dom'
import '../Style/Card.css';
//import {useEffect, useState, /*useState*/} from 'react';

function Card () {
    var localS = JSON.parse(localStorage.getItem("items"));
    if (!localS || localS.length === 0) {
        console.error("LocalStorage 'items' is empty.");
        fetch("/logements.json",)
            .then((response) => response.json()
            .then((response) => window.localStorage.setItem("items", JSON.stringify(response)))
            .then(console.log(localStorage))
            .catch((error) => console.log(error))
    )
    }
    console.log(localS)  
        if (localS === null) {
             fetch("/logements.json", {
                method: 'GET',
                mode: 'cors', 
                headers: {
                  'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())  
            .then(data => {
                window.localStorage.setItem("items", JSON.stringify(data));  
                console.log(localStorage.getItem("items"));  
            })
            .catch(error => console.log(error));  
        
    }
    return (
        <div>
<section id='Cards'>
    <ul className='list_card'>
        {localS.map((item) => (
            <li key={ item.id }>
               <div /*</li>Class='card'*/>
               <Link to={`/Logement/${item.id}`}>
                <div Class='img-home'>
                <div className='text'> {item.title} </div> 
                <img Class='img_location' src= {item.cover} alt=""/> </div>
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
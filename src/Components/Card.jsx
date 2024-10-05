import { Link } from 'react-router-dom'
import '../Style/Card.css';
//import {useEffect, useState, /*useState*/} from 'react';

function Card () {
    var localS = JSON.parse(localStorage.getItem("items"));
    console.log(localS)  
        if (localS === null) {
             fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json', {
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
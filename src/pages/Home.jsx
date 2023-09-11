import Header from '../Components/Header.jsx'
import img from '../IMG.png'
import '../Header.css';
import {useEffect} from 'react';

function Home() {

    useEffect(() => {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json', 
        {
            mode: 'no-cors',
            headers: {
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin" : "*",
                 "Access-Control-Allow-Methods": "*",
            },
        })
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <Header></Header>
            <body>
                <section>
                    <p class='Text-logo'>Chez vous, partout et ailleurs</p>
                    <img src={img} alt="" className='img-home' />
                </section>
                <section id='Cards'>
                    <div class='card'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem nisi error quos fugit cupiditate atque modi, iusto dicta, eligendi aspernatur! Laboriosam maxime aliquam minima rem earum quos, dolore mollitia.
                    </div>
                    <div class='card'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem nisi error quos fugit cupiditate atque modi, iusto dicta, eligendi aspernatur! Laboriosam maxime aliquam minima rem earum quos, dolore mollitia.
                    </div>
                    <div class='card'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem nisi error quos fugit cupiditate atque modi, iusto dicta, eligendi aspernatur! Laboriosam maxime aliquam minima rem earum quos, dolore mollitia.
                    </div>
                </section>
            </body>
        </div>
    )
}

export default Home
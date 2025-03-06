import Header from '../Components/Header.jsx';
import Card from '../Components/Card.jsx';
import img from '../Images/IMG.png';
import '../Style/Header.css';
import Footer from '../Components/Footer.jsx';
import '../Style/Home.css';
import { useState } from 'react';

function Home() {
    useState(() => {
        fetch(
            "/logements.json"
        )
            .then((response) =>
                response.json().then((response) =>
                    window.localStorage.setItem(
                        'items',
                        JSON.stringify(response)
                    )
                )
            )
            .catch((error) => console.log(error));
    }, []);

    var localS = JSON.parse(localStorage.getItem('items'));
    if (!localS || localS.length === 0) {
        console.error('Erreur');
        fetch(
            "/logements.json"
        )
            .then((response) =>
                response.json().then((response) =>
                    window.localStorage.setItem(
                        'items',
                        JSON.stringify(response)
                    )
                )
            )
            .catch((error) => console.log(error));
    }

    console.log(localS);
    {localS && localS.map((item) => console.log(item))}

    return (
        <div className="dimension">
            <Header></Header>

            <section className="section_principale">
                <p className="Text-logo">Chez vous, partout et ailleurs</p>
                <div className="container_img_header">
                    <img
                        src={img}
                        alt=""
                        className="img-principale"
                    />
                </div>
            </section>
            <Card></Card>
          
            <Footer />
        </div>
    );
}

export default Home;
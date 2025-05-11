import Header from '../Components/Header.jsx';
import Card from '../Components/Card.jsx';
import img from '../Images/IMG.png';
import '../Style/Header.css';
import Footer from '../Components/Footer.jsx';
import '../Style/Home.css';
import { useEffect, useState } from 'react';

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Récupérer les données depuis logements.json
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.log(error));
    }, []);

    // Log des items dans la console pour vérification
    items.map((item) => console.log(item));

    return (
        <div className="dimension">
            <Header />

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

            {/* On passe les items récupérés à Card en tant que prop */}
            <Card items={items} />

            <Footer />
        </div>
    );
}

export default Home;
import Header from '../Components/Header.jsx'
import Card from '../Components/Card.jsx'
import img from '../Images/IMG.png'
import '../Style/Header.css';

import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Home() {
 //   const [surveyData, setSurveyData] = useState({})
 //   const { questionNumber } = useParams()

    useEffect(() => {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
            .then((response) => response.json()
            .then((response) => window.localStorage.setItem("items", JSON.stringify(response)))
            .catch((error) => console.log(error))
    )}, [] )
    var localS = JSON.parse(localStorage.getItem("items"));
    console.log(localS[0])
    return (
        <div>
            <Header></Header>
            <body>
                <section>
                    <p Class='Text-logo'>Chez vous, partout et ailleurs</p>
                    <img src={img} alt="" ClassName='img-home' />
                </section>
                <Card></Card>
            </body>
        </div>
    )
}

export default Home
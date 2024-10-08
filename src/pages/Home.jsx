import Header from '../Components/Header.jsx'
import Card from '../Components/Card.jsx';
import img from '../Images/IMG.png'
import '../Style/Header.css';
import Footer from '../Components/Footer.jsx';
import '../Style/Home.css';
import { useState, /*useState*/} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLinkFooter = styled(Link)
`
    margin-top: 24%;
    margin-left: 1%;
    list-style: none;
`

function Home() {
   // var localS = JSON.parse(localStorage.getItem("items"));
    //console.log(localS)
    useState(() => {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json',)
            .then((response) => response.json()
            .then((response) => window.localStorage.setItem("items", JSON.stringify(response)))
            .then(console.log(localStorage))
            .catch((error) => console.log(error))
    )}, [] )
    var localS = JSON.parse(localStorage.getItem("items"));
    console.log(localS)
    {localS.map((item) => (console.log(item)))}
    return (
        <div className='dimension'>
            
            <Header></Header>
              
                <section ClassName="section_principale">
                    <p ClassName='Text-logo'>Chez vous, partout et ailleurs</p>
                    <div className='container_img_header'>
                    <img src={img} alt="" ClassName='img-principale' /> </div>
                </section>
                <Card></Card>
            
            <StyledLinkFooter> <Footer></Footer> </StyledLinkFooter>
        </div> 
    )
}

export default Home
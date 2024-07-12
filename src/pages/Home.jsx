import Header from '../Components/Header.jsx'
import Card from '../Components/Card.jsx'
import img from '../Images/IMG.png'
import '../Style/Header.css';
import Footer from '../Components/Footer.jsx';
import '../Style/Home.css';
import {useEffect, /*useState*/} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLinkFooter = styled(Link)
`
    margin-top: 24%;
    margin-left: 1%;
    list-style: none;
`

function Home() {

    useEffect(() => {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
            .then((response) => response.json()
            .then((response) => window.localStorage.setItem("items", JSON.stringify(response)))
            .catch((error) => console.log(error))
    )}, [] )
    return (
        <div className='dimension'>
            
            <Header></Header>
              
                <section ClassName="section_principale">
                    <p ClassName='Text-logo'>Chez vous, partout et ailleurs</p>
                    <img src={img} alt="" ClassName='img-principale' />
                </section>
                <Card></Card>
            
            <StyledLinkFooter> <Footer></Footer> </StyledLinkFooter>
        </div> 
    )
}

export default Home
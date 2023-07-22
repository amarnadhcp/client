import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
// import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards } from "../../data"
import CatCard from "../../components/catCard/CatCard"
import Container from "../../components/container/Container";
import NavBar from "../../components/navbar/NavBar"
import Footer from "../../components/footer/Footer";
const Home = () => {
    return (
   
        <div className="home">
            <NavBar/>

            <Featured />

            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Slide>

            <Container />

            <Footer/>
        </div>
    )
}

export default Home
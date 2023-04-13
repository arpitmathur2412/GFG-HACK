import Hero from "../components/MainBody/Hero";
import ServiceHero from "../assets/serviceHero.jpg";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar"
import Navbarf from "../components/Navbar/Navbarf";

const Service = () => {
    const navigate=useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token'))
        navigate("/signin")
    }
    )   
    return (
        <>
        <Navbarf/>
            <Hero
                cName={'hero-mid'}
                heroImg={ServiceHero}
                title={'Stock Investment'}
                text={'Explore every possibility of growing!'}
                btnText={'Explore'}
                url={'/'}
                btnClass={'show'}
            />
            <div>
                <h2>Stock Prediction will be added here</h2>
            </div>
            <Footer />
        </>
    )
}

export default Service




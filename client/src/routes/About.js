import Hero from "../components/MainBody/Hero";
import AboutHero from '../assets/aboutHero.jpg'
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";
import Navbar from "../components/Navbar/Navbar"
const About = () => {
    return (
        <>
        <Navbar/>
            <Hero
                cName={'hero-mid'}
                heroImg={AboutHero}
                title={'About Us'}
                btnClass={'hide'}
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About


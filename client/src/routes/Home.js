import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/MainBody/Hero";
import HomeHeroImg from "../assets/homeHero.jpg"
import HomeInfo from "../components/MainBody/HomeInfo";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName={'hero'}
                heroImg={HomeHeroImg}
                title={'Just got the salary?'}
                text={'Start investing!'}
                btnText={'Get Started'}
                url={'/'}
                btnClass={'show'}
            />
            <HomeInfo />
            {/*Optional thing can be added*/}

            <Footer />
        </>
    )
}

export default Home
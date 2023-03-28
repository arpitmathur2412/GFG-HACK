import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/MainBody/Hero";
import ServiceHero from "../assets/serviceHero.jpg";
import Footer from "../components/Footer/Footer";


const Service = () => {
    return (
        <>
            <Navbar/>
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




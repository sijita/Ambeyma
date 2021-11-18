
import AboutSection from '../components/AboutSection';
import BedSection from '../components/BedSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <>
            <AboutSection
                titulo='Hostería Ambeyma' 
                subtitulo='Sobre nosotros' 
                texto='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.'
            />
            <ServicesSection 
                servicio1='Hospedaje'
                servicio2='Piscinas'
                servicio3='Bar'
                servicio4='Eventos'
                servicio5='Sinteticas'
                servicio6='WiFi'
            />
            <BedSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default Home; 
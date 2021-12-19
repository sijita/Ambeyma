import Header from "../components/Header";
import AboutSection from '../components/AboutSection';
import BedSection from '../components/BedSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <>
            <Header
                menu1="Inicio"
                menu2="Nosotros"
                menu3="Servicios"
                menu4="Habitaciones"
                menu5="Galería"
                menu6="Contacto"
            />
            <AboutSection
                titulo='Hostería Ambeyma' 
                subtitulo='Sobre nosotros' 
                texto='Situados en la entrada de Garzón, la hostería Ambeyma es el mejor sitio de hospedaje y recreación para su estancia y/o diversión.
                        Contamos con varios tipos de habitaciones, piscinas y canchas sintéticas'
            />
            <ServicesSection 
                servicio1='Hospedaje'
                servicio2='Piscinas'
                servicio3='Bar'
                servicio4='Eventos'
                servicio5='Sintéticas'
                servicio6='WiFi'
            />
            <BedSection
                habitacion1='Suite'
                habitacion2='Doble'
                habitacion3='Familiar'
                habitacion4='Romántica'
            />
            <ContactSection />
            <Footer 
                direccion='CR 10 # 12-21 - Garzón, Huila'
                celular='311 5905930'
                celular2='(608) 8332022'
                correo='hosteriaambeymagarzon@hotmail.com'
            />
        </>
    );
}

export default Home; 
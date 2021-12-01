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
                texto='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
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
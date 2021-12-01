import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import GalleryCards from "../components/GalleryCards";
import Evento1 from "../images/evento.jpg"
import Evento2 from "../images/evento2.jpg"
import Evento3 from '../images/evento3.jpg'
import Evento4 from '../images/evento4.jpg'
import Evento5 from '../images/evento5.jpg'
import Evento6 from '../images/evento6.jpg'
import Evento7 from '../images/evento7.jpg'
import Evento8 from '../images/evento8.jpg'
import Evento9 from '../images/evento9.jpg'
import Evento10 from '../images/evento10.jpg'
import Habitacion1 from '../images/sencilla.jpg'
import Habitacion2 from '../images/doble.jpg'
import Habitacion3 from '../images/grupales.jpg'
import Habitacion4 from '../images/especial.jpg'
import Habitacion5 from '../images/especial2.jpg'
import Habitacion6 from '../images/especial3.jpg'
import Habitacion7 from '../images/especial4.jpg'
import Habitacion8 from '../images/especial5.jpg'
import Habitacion9 from '../images/jacuzzi.jpg'
import Habitacion10 from '../images/piezaEspecial.jpg'
import Piscina1 from '../images/banner.jpg'
import Piscina2 from '../images/imagen1.jpg'
import Piscina3 from '../images/piscina1.jpg'
import Piscina4 from '../images/piscina2.jpg'
import Piscina5 from '../images/piscina3.jpg'
import Sintetica from '../images/sintetica.jpg'
import Sintetica2 from '../images/sintetica2.jpg'
import Sintetica3 from '../images/sintetica3.jpg'
import Sintetica4 from '../images/sintetica4.jpg'
import Sintetica5 from '../images/sintetica5.jpg'
import Sintetica6 from '../images/sintetica6.jpg'
import { IoTicketOutline, IoBedOutline, IoWaterOutline, IoFootballOutline  } from "react-icons/io5";

const Gallery = () => {
    return (
        <>
            <NavBar 
                menu1="Inicio"
                menu2="Nosotros"
                menu3="Servicios"
                menu4="Habitaciones"
                menu5="Galería"
                menu6="Contacto"
            />
            <h1 className="text-center my-5" style={{color: '#F23339', fontWeight: '600'}}>Galería</h1>
            <GalleryCards
                titulo={["Eventos ", <IoTicketOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '40px', fontSize: '30px'}} />]}
                texto="Hostería Ambeyma es el lugar por excelencia para  cualquier tipo de evento. Contamos con 
                el respaldo de toda la gente."
                imagen1={Evento1}
                imagen2={Evento2}
                imagen3={Evento3}
                imagen4={Evento4}
                imagen5={Evento5}
                imagen6={Evento6}
                imagen7={Evento7}
                imagen8={Evento8}
                imagen9={Evento9}
                imagen10={Evento10}
                propiedades="align-self-center p-md-5"
            />
            <GalleryCards
                titulo={["Habitaciones ", <IoBedOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '40px', fontSize: '30px'}} />]}
                texto="En hostería Ambeyma Tenemos las mejores habitaciones para tu comodidad y bienestar."
                imagen1={Habitacion1}
                imagen2={Habitacion2}
                imagen3={Habitacion3}
                imagen4={Habitacion4}
                imagen5={Habitacion5}
                imagen6={Habitacion6}
                imagen7={Habitacion7}
                imagen8={Habitacion8}
                imagen9={Habitacion9}
                imagen10={Habitacion10}
                propiedades="align-self-center p-md-5 order-md-2"
            />
            <GalleryCards
                titulo={["Piscinas ", <IoWaterOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '40px', fontSize: '30px'}} />]}
                texto="Nuestras piscinas son diversión garantizada para toda tu familia y amigos."
                imagen1={Piscina1}
                imagen2={Piscina2}
                imagen3={Piscina3}
                imagen4={Piscina4}
                imagen5={Piscina5}
                imagen6={Piscina1}
                imagen7={Piscina2}
                imagen8={Piscina3}
                imagen9={Piscina4}
                imagen10={Piscina5}
                propiedades="align-self-center p-md-5"
            />
            <GalleryCards
                titulo={["Canchas sintéticas ", <IoFootballOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '40px', fontSize: '30px'}} />]}
                texto="Canchas de fútbol 5 y futbol 11 para que vengas a jugar."
                imagen1={Sintetica}
                imagen2={Sintetica2}
                imagen3={Sintetica3}
                imagen4={Sintetica5}
                imagen5={Sintetica6}
                imagen6={Sintetica}
                imagen7={Sintetica2}
                imagen8={Sintetica3}
                imagen9={Sintetica4}
                imagen10={Sintetica5}
                propiedades="align-self-center p-md-5 order-md-2"
            />
            <Footer 
                direccion='CR 10 # 12-21 - Garzón, Huila'
                celular='311 2194526'
                correo='hosteriaambeymagarzon@hotmail.com'
            />
        </>
    );
}

export default Gallery; 
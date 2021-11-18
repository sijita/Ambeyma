import Sintetica from '../images/sintetica.jpg'
import Jacuzzi from '../images/jacuzzi.jpg'
import Evento from '../images/evento.jpg'
import Evento2 from '../images/evento2.jpg'
import PiezaEspecial2 from '../images/piezaEspecial.jpg'
import PiezaEspecial from '../images/especial2.jpg'
import Styles from '../css/gallery.module.css'

export default function GallerySection() {
    return (
        <section className="my-5">
            <div className="container p-5">
                <h2 className="m-0 text-center" style={{fontWeight: '600', fontSize: '35px', color: '#ed3237'}}>Galería</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-5">
                    <div className={`${Styles.imagen} col p-2 d-flex justify-content-center`}>
                        <img className="rounded img-fluid" src={Sintetica} alt="Cancha sintetica" width="100%" style={{objectFit: 'cover'}} />
                    </div>
                    <div className={`${Styles.imagen} col p-2 d-flex justify-content-center`}>
                        <img className="rounded img-fluid" src={Jacuzzi} alt="Jacuzzi decorado" width="100%" style={{objectFit: 'cover'}} />
                    </div>
                    <div className={`${Styles.imagen} col p-2 d-flex justify-content-center`}>
                        <img className="rounded img-fluid" src={Evento} alt="Evento" width="100%" style={{objectFit: 'cover'}} />
                    </div>
                    <div className={`${Styles.imagen} col p-2 d-flex justify-content-center`}>
                        <img className="rounded img-fluid" src={Evento2} alt="Evento" width="100%" style={{objectFit: 'cover'}} />
                    </div>
                    <div className={`${Styles.imagen} col p-2 d-flex justify-content-center`}>
                        <img className="rounded img-fluid" src={PiezaEspecial2} alt="Evento" width="100%" style={{objectFit: 'cover'}} />
                    </div>
                    <div className={`${Styles.imagen} col p-2 d-flex justify-content-center`}>
                        <img className="rounded img-fluid" src={PiezaEspecial} alt="Evento" width="100%" style={{objectFit: 'cover'}} />
                    </div>
                </div>
                <a href="/" className="fs-5 d-block text-center fs-6" style={{color: '#ff0014'}}>Ver más fotos</a>
            </div>
        </section>
    )
}

import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Styles from '../css/galleryCard.module.css'

export default function GalleryCards({ titulo, texto, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, propiedades }) {
    
    return (
        <div className="d-flex flex-column p-4 py-md-5 px-md-0 p-lg-5 gap-3 gap-md-0 flex-md-row align-content-center justify-content-center container" >
            <div className={`${Styles.cardW} ${propiedades}`}>
                <h2 className="d-inline" style={{color: "#F23339", fontWeight: '600'}}>{titulo}</h2>
                <p className="fs-5 mt-3" style={{textAlign: 'justify'}}>{texto}</p>
            </div>
                <Carousel plugins={[
                    'infinite',
                    'fastSwipe',
                    {
                    resolve: autoplayPlugin,
                    options: {
                        interval: 2000,
                        }
                        },
                    ]}   
                    animationSpeed={1000}
                    className="rounded-3"
                >
                    <img src={imagen1} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen2} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen3} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen4} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen5} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen6} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen7} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen8} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen9} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                    <img src={imagen10} width="100%" height="400px" alt="imagen" style={{objectFit: 'cover'}} className="rounded" />
                </Carousel>
        </div>
    )
}

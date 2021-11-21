import React from 'react'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function GalleryCards({ titulo, texto, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, propiedades }) {
    
    return (
        <div className="d-flex flex-column p-5 py-md-5 px-md-0 p-lg-5 gap-3 gap-md-0 flex-md-row align-content-center justify-content-center my-5 container" >
            <div className={propiedades} style={{width: '85%'}}>
                <h1 className="d-inline" style={{color: "#F23339", fontWeight: '600'}}>{titulo}</h1>
                <hr style={{color: '#E32E33'}} />
                <p className="fs-5" style={{textAlign: 'justify'}}>{texto}</p>
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

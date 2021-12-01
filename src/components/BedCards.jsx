import Styles from '../css/bedCards.module.css'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function BedCards({titulo, texto, imagen1, imagen2, propiedades}) {

    return (
        <div className={`${Styles.container} ${propiedades}`} >
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
                    className={`${Styles.card}`}
                >
                    <img src={imagen1} width="100%" height="500px" alt="imagen" style={{objectFit: 'cover'}} />
                    <img src={imagen2} width="100%" height="500px" alt="imagen" style={{objectFit: 'cover'}} />
                </Carousel>
                <div className={`${Styles.content} rounded-bottom`}>
                    <h2 style={{color: '#FFF', fontWeight: '600'}}>{titulo} </h2>
                    <p className="fs-5 m-0">{texto}</p>
                </div>
        </div>
    )
}

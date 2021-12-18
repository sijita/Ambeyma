import Styles from '../css/bedCards.module.css'
import Carousel from 'nuka-carousel';

export default function BedCards({titulo, texto, imagen1, imagen2, propiedades}) {

    return (
        <div className={`${Styles.container} ${propiedades}`} >
                <Carousel 
                    autoplay={true}
                    withoutControls={true}
                    autoplayInterval={"2000"}
                    wrapAround={true}
                    pauseOnHover={false}
                    className={`${Styles.card}`}
                >
                    <img src={imagen1} width="100%" height="500px" alt="imagen" className={`${Styles.card}`} style={{objectFit: 'cover'}} />
                    <img src={imagen2} width="100%" height="500px" alt="imagen" className={`${Styles.card}`} style={{objectFit: 'cover'}} />
                    <img src={imagen1} width="100%" height="500px" alt="imagen" className={`${Styles.card}`} style={{objectFit: 'cover'}} />
                    <img src={imagen2} width="100%" height="500px" alt="imagen" className={`${Styles.card}`} style={{objectFit: 'cover'}} />
                </Carousel>
                <div className={`${Styles.content} rounded-bottom`}>
                    <h2 style={{color: '#FFF', fontWeight: '600'}}>{titulo} </h2>
                    <p className="fs-5 m-0">{texto}</p>
                </div>
        </div>
    )
}

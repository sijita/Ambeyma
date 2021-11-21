import Habitacion1 from '../images/sencilla.jpg'
import Habitacion2 from '../images/doble.jpg'
import Habitacion3 from '../images/grupales.jpg'
import Habitacion4 from '../images/especial3.jpg'
import Styles from '../css/bed.module.css'
import { TiUserOutline, TiGroupOutline, TiUserAddOutline, TiHeartOutline } from 'react-icons/ti'

export default function BedSection() {
    
    const x = <TiUserOutline className="fs-5" style={{color: '#E32E33'}} />
    const y = <TiUserAddOutline className="fs-5" style={{color: '#E32E33'}} />
    const z = <TiGroupOutline className="fs-5" style={{color: '#E32E33'}} />
    const w = <TiHeartOutline className="fs-5" style={{color: '#E32E33'}} />

    return (
        <section className="container p-5" id="habitaciones">
            <h1 className="m-0 text-center mx-auto text-break" style={{fontWeight: '600', color: '#F23339'}}>Habitaciones</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 mt-5">
                <div className={`${Styles.bed} col p-3 card border-0`}>
                    <img src={Habitacion1} alt="Habitación1" className={`${Styles.imagen} rounded shadow`} width="100%"  style={{objectFit: 'cover'}} />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{height: '100px'}}>
                        <h4 className="d-flex align-items-center" style={{color: '#F23339'}}>{x}&nbsp;Sencilla</h4>
                        <p className="text-center m-0 fs-5">Habitaciones con una cama</p>
                    </div>
                </div>
                <div className={`${Styles.bed} col p-3 card border-0`}>
                    <img src={Habitacion2} alt="Habitación2" className={`${Styles.imagen} rounded shadow`} width="100%"  style={{objectFit: 'cover'}} />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{height: '100px'}}>
                        <h4 className="d-flex align-items-center" style={{color: '#F23339'}}>{y}&nbsp;Doble</h4>
                        <p className="text-center m-0 fs-5">Habitaciones con dos camas</p>
                    </div>
                </div>
                <div className={`${Styles.bed} col p-3 card border-0`}>
                    <img src={Habitacion3} alt="Habitación3" className={`${Styles.imagen} rounded shadow`} width="100%"  style={{objectFit: 'cover'}} />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{height: '100px'}}>
                        <h4 className="d-flex align-items-center" style={{color: '#F23339'}}>{z}&nbsp;Grupal</h4>
                        <p className="text-center m-0 fs-5">Habitaciones con más de dos camas</p>
                    </div>
                </div>
                <div className={`${Styles.bed} col p-3 card border-0`}>
                    <img src={Habitacion4} alt="Habitación4" className={`${Styles.imagen} rounded shadow`} width="100%"  style={{objectFit: 'cover'}} />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{height: '100px'}}>
                        <h4 className="d-flex align-items-center" style={{color: '#F23339'}}>{w}&nbsp;Especial</h4>
                        <p className="text-center m-0 fs-5">Habitaciones decoradas</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

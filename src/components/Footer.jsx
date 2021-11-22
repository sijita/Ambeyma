import Logo from "../images/Logo.png";
import { RiInstagramFill, RiFacebookCircleFill, RiWhatsappFill } from 'react-icons/ri'
import { BiMapAlt, BiPhone } from 'react-icons/bi'
import { GoMail } from 'react-icons/go'


export default function Footer({ direccion, celular, celular2, correo }) {
    return (
        <footer className="container-fluid p-5 text-center bg-light">
            <div className="d-flex flex-row justify-content-center align-items-center gap-5 mb-5">
                <a href="https://web.facebook.com/HotelAmbeyma" target="_blank" rel="noreferrer">
                    <div><RiFacebookCircleFill className="fs-3" style={{color: '#F23339'}} /></div>
                </a>
                <div><RiWhatsappFill className="fs-3" style={{color: '#F23339'}} /></div>
                <div><RiInstagramFill className="fs-3" style={{color: '#F23339'}} /></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center mb-5 align-items-center gap-5">
                <div className="col">
                    <p style={{color: '#F23339', fontWeight: '500'}} className="fs-5"><BiMapAlt className="fs-5" style={{color: '#E32E33'}} />&nbsp;&nbsp;Dirección</p>
                    <p className="d-inline" style={{fontWeight: '400'}}>{direccion}</p>
                </div>
                <div className="col">
                    <p style={{color: '#F23339', fontWeight: '500'}} className="fs-5"><BiPhone className="fs-5" style={{color: '#E32E33'}} />&nbsp;&nbsp;Reservas</p>
                    <p className="d-inline" style={{fontWeight: '400'}}>{celular}</p>
                    <p style={{fontWeight: '400'}}>{celular2}</p>
                </div>
                <div className="col">
                    <p style={{color: '#F23339', fontWeight: '500'}} className="fs-5"><GoMail className="fs-5" style={{color: '#E32E33'}} />&nbsp;&nbsp;Email</p>
                    <p className="d-inline text-break" style={{fontWeight: '400'}}>{correo}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col d-flex align-items-center justify-content-center">
                    <img src={Logo} alt="Logo Ambeyma" width="170px" />
                </div>
            </div>
        </footer>
    )
}

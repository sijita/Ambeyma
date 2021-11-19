import { useState } from "react";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
} from "reactstrap";
import Logo from "../images/Logo.png";
import Styles from '../css/header.module.css';
import { NavLink } from "react-router-dom";


export default function Header({ menu1, menu2, menu3, menu4, menu5, menu6, subtitulo }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className={`${isOpen ? Styles.header2 : Styles.header}`}>
            <Navbar expand="lg" className={`${isOpen ? Styles.navBar : Styles.navBar2}`} light>
                <NavbarBrand className="m-0 p-0 d-lg-none" href="/">
                    <img src={Logo} alt="Logo" width="170" />
                </NavbarBrand>
                <NavbarToggler className="border-0" onClick={toggle} />
                <Collapse className='justify-content-center' navbar isOpen={isOpen}>
                    <Nav className='gap-3 gap-lg-4 gap-xl-5' style={{ fontWeight: '500' }} navbar>
                        <NavItem className="align-self-center">
                            <NavbarBrand className="my-0 mx-3 p-0 d-none d-lg-block" href="/">
                                <img src={Logo} alt="Logo" width="170px" />
                            </NavbarBrand>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <NavLink to={"/"} className="text-decoration-none" style={{ color: '#F23339', fontWeight: '600' }}>
                                {menu1}
                            </NavLink>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <a href="#Nosotros" className="text-decoration-none text-dark" style={{ fontWeight: '500' }}>
                                {menu2}
                            </a>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <a href="#Servicios" className="text-decoration-none text-dark" style={{ fontWeight: '500' }}>
                                {menu3}
                            </a>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <a href="#Habitaciones" className="text-decoration-none text-dark" style={{ fontWeight: '500' }}>
                                {menu4}
                            </a>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <NavLink to={"/Galeria"} className="text-decoration-none text-dark" style={{ fontWeight: '500' }}>
                                {menu5}
                            </NavLink>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <a href="#Contacto" className="text-decoration-none text-dark" style={{ fontWeight: '500' }}>
                                {menu6}
                            </a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div className={isOpen ? "d-none" : "" + Styles.subHeader}>
                {/* <h1 className={`${Styles.headerTitle} mb-3`}>{titulo}</h1> */}
                <h1 className={`${Styles.headerSubtitle} mb-0`}>El <span style={{ color: '#F23339' }}>lugar ideal</span> para descansar y vivir momentos agradables con tu familia y amigos</h1>
            </div>
        </header>
    );
}

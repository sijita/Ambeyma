import React from 'react';
import { NavLink } from "react-router-dom";
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
import Styles from '../css/header.module.css'

export default function NavBar({ menu1, menu2, menu3, menu4, menu5, menu6 }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="lg" className={`${Styles.navBar}`} light>
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
                            <NavLink to={"/"} className="text-decoration-none text-dark">
                                {menu1}
                            </NavLink>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <a href="/" className="text-decoration-none text-dark">
                                {menu2}
                            </a>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <a href="/" className="text-decoration-none text-dark">
                                {menu3}
                            </a>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <NavLink to="/habitaciones" activeStyle={{color: '#F23339', fontWeight: '600'}} className="text-decoration-none" style={{ color: '#282529' }}>
                                {menu4}
                            </NavLink>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <NavLink to="/galeria" activeStyle={{color: '#F23339', fontWeight: '600'}} className="text-decoration-none" style={{ color: '#282529' }} >
                                {menu5}
                            </NavLink>
                        </NavItem>
                        <NavItem className="fs-5 align-self-center">
                            <a href="/" className="text-decoration-none text-dark">
                                {menu6}
                            </a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    )
}

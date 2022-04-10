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
import Styles from "../css/header.module.css";
import { Link } from "react-router-dom";

export default function Header({ menu1, menu2, menu3, menu4, menu5, menu6 }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className={`${Styles.header}`}>
      <Navbar
        expand="lg"
        className={`${
          isOpen ? Styles.navBar : Styles.navBar2
        } align-content-start pt-1`}
        light
      >
        <NavbarBrand className="m-0 p-0 d-lg-none" href="/">
          <img src={Logo} alt="Logo" width="170" />
        </NavbarBrand>
        <NavbarToggler className="border-0" onClick={toggle} />
        <Collapse
          className={`justify-content-center ${isOpen ? Styles.menu : ""}`}
          navbar
          isOpen={isOpen}
        >
          <Nav
            className="gap-4 gap-lg-4 gap-xl-5"
            style={{ fontWeight: "500" }}
            navbar
          >
            <NavItem className="align-self-center">
              <NavbarBrand className="my-0 mx-3 p-0 d-none d-lg-block" href="/">
                <img src={Logo} alt="Logo" width="170px" />
              </NavbarBrand>
            </NavItem>
            <NavItem className="fs-5 align-self-center">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: "600",
                }}
              >
                {menu1}
              </Link>
            </NavItem>
            <NavItem className="fs-5 align-self-center">
              <a
                href="#nosotros"
                className="text-decoration-none text-dark"
                style={{ fontWeight: "500" }}
              >
                {menu2}
              </a>
            </NavItem>
            <NavItem className="fs-5 align-self-center">
              <a
                href="#servicios"
                className="text-decoration-none text-dark"
                style={{ fontWeight: "500" }}
              >
                {menu3}
              </a>
            </NavItem>
            <NavItem className="fs-5 align-self-center">
              <Link
                to="/habitaciones"
                className="text-decoration-none text-dark"
                style={{ fontWeight: "500" }}
              >
                {menu4}
              </Link>
            </NavItem>
            <NavItem className="fs-5 align-self-center">
              <Link
                to={"/galeria"}
                className="text-decoration-none text-dark"
                style={{ fontWeight: "500" }}
              >
                {menu5}
              </Link>
            </NavItem>
            <NavItem className="fs-5 align-self-center">
              <a
                href="#contacto"
                className="text-decoration-none text-dark"
                style={{ fontWeight: "500" }}
              >
                {menu6}
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className={isOpen ? "d-none" : "" + Styles.subHeader}>
        <h1 className={`${Styles.headerSubtitle} mb-0`}>
          El{" "}
          <span
            style={{
              color: "#F23339",
            }}
          >
            lugar ideal
          </span>{" "}
          para descansar y vivir momentos agradables con tu familia y amigos
        </h1>
      </div>
    </header>
  );
}

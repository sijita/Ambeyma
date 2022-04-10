import React from "react";
import BedCards from "../components/BedCards";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import imagen1 from "../images/sencilla.jpg";
import imagen2 from "../images/sencilla2.jpg";
import imagen3 from "../images/doble.jpg";
import imagen4 from "../images/grupales.jpg";
import imagen5 from "../images/especial.jpg";
import imagen6 from "../images/especial2.jpg";
import {
  TiUserOutline,
  TiGroupOutline,
  TiUserAddOutline,
  TiHeartOutline,
} from "react-icons/ti";

export default function Beds() {
  return (
    <>
      <NavBar
        menu1="Inicio"
        menu2="Nosotros"
        menu3="Servicios"
        menu4="Habitaciones"
        menu5="Galería"
        menu6="Contacto"
      />
      <svg width="0" height="0">
        <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FF0000" offset="0%" />
          <stop stopColor="#FF4848" offset="100%" />
        </linearGradient>
      </svg>
      <h1
        className="text-center mt-5"
        style={{
          backgroundImage:
            "linear-gradient(225deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontWeight: "600",
        }}
      >
        Habitaciones
      </h1>
      <svg width="0" height="0" />
      <div
        className="row row-cols-1 row-cols-md-2 mx-auto p-0 p-sm-5 p-md-2"
        style={{ maxWidth: "1350px" }}
      >
        <BedCards
          titulo={[
            "Suite ",
            <TiUserOutline
              className="align-self-center fs-4"
              style={{ fill: "url(#red-gradient)" }}
            />,
          ]}
          texto="Habitación especial para acomodarse solo/sola o en pareja."
          imagen1={imagen1}
          imagen2={imagen2}
          propiedades="my-5 p-0 px-md-2 container"
        />
        <BedCards
          titulo={[
            "Doble ",
            <TiUserAddOutline className="fs-4" style={{ fill: "url(#red-gradient)" }} />,
          ]}
          texto="Habitación con dos camas para más de una persona"
          imagen1={imagen3}
          imagen2={imagen3}
          propiedades="my-5 p-0 px-md-2 container"
        />
      </div>
      <BedCards
        titulo={[
          "Familiar ",
          <TiGroupOutline className="fs-4" style={{ fill: "url(#red-gradient)" }} />,
        ]}
        texto="Habitación con múltiples camas para toda tu familia o grupo de amigos"
        imagen1={imagen4}
        imagen2={imagen4}
        propiedades="mt-4 mb-5 p-0 container"
      />
      <BedCards
        titulo={[
          "Romántica ",
          <TiHeartOutline className="fs-4" style={{ fill: "url(#red-gradient)" }} />,
        ]}
        texto="Habitación decorada para cualquier ocasión"
        imagen1={imagen5}
        imagen2={imagen6}
        propiedades="my-5 p-0 container"
      />
      <Footer
        direccion="CR 10 # 12-21 - Garzón, Huila"
        celular="311 5905930"
        celular2="(608) 8332022"
        correo="hosteriaambeymagarzon@hotmail.com"
      />
    </>
  );
}

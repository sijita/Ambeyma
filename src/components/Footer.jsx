import Logo from "../images/Logo.png";
import {
  RiInstagramFill,
  RiFacebookCircleFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { BiMapAlt, BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";

export default function Footer({ direccion, celular, celular2, correo }) {
  return (
    <footer className="container-fluid p-5 text-center bg-light">
      <svg width="0" height="0">
        <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FF0000" offset="0%" />
          <stop stopColor="#FF4848" offset="100%" />
        </linearGradient>
      </svg>
      <div className="d-flex flex-row justify-content-center align-items-center gap-5 mb-5">
        <a
          href="https://web.facebook.com/HotelAmbeyma"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <RiFacebookCircleFill
              className="fs-2"
              style={{ fill: "url(#red-gradient)" }}
            />
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=573115905930&text=Hola!."
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <RiWhatsappFill className="fs-2" style={{ fill: "url(#red-gradient)" }} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/hosteria_ambeyma/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <RiInstagramFill className="fs-2" style={{ fill: "url(#red-gradient)" }} />
          </div>
        </a>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center mb-5 align-items-center gap-5">
        <div className="col">
          <p
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "500",
            }}
            className="fs-5"
          >
            <BiMapAlt className="fs-5" style={{ fill: "url(#red-gradient)" }} />
            &nbsp;&nbsp;Dirección
          </p>
          <p className="d-inline" style={{ fontWeight: "400" }}>
            {direccion}
          </p>
        </div>
        <div className="col">
          <p
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "500",
            }}
            className="fs-5"
          >
            <BiPhone className="fs-5" style={{ fill: "url(#red-gradient)" }} />
            &nbsp;&nbsp;Reservas
          </p>
          <p className="d-inline" style={{ fontWeight: "400" }}>
            {celular}
          </p>
          <p style={{ fontWeight: "400" }}>{celular2}</p>
        </div>
        <div className="col">
          <p
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "500",
            }}
            className="fs-5"
          >
            <GoMail className="fs-5" style={{ fill: "url(#red-gradient)" }} />
            &nbsp;&nbsp;Email
          </p>
          <p className="d-inline text-break" style={{ fontWeight: "400" }}>
            {correo}
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col d-flex align-items-center justify-content-center">
          <img src={Logo} alt="Logo Ambeyma" width="170px" />
        </div>
      </div>
    </footer>
  );
}

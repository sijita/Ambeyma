import Habitacion1 from "../images/sencilla.webp";
import Habitacion2 from "../images/doble.webp";
import Habitacion3 from "../images/grupales.webp";
import Habitacion4 from "../images/especial.webp";
import Styles from "../css/bed.module.css";
import {
  TiUserOutline,
  TiGroupOutline,
  TiUserAddOutline,
  TiHeartOutline,
} from "react-icons/ti";
import { Link } from "react-router-dom";

export default function BedSection({
  habitacion1,
  habitacion2,
  habitacion3,
  habitacion4,
}) {
  const x = <TiUserOutline className="fs-5" style={{ fill: "url(#red-gradient)" }} />;
  const y = <TiUserAddOutline className="fs-5" style={{ fill: "url(#red-gradient)" }} />;
  const z = <TiGroupOutline className="fs-5" style={{ fill: "url(#red-gradient)" }} />;
  const w = <TiHeartOutline className="fs-5" style={{ fill: "url(#red-gradient)" }} />;

  return (
    <section className="container p-5" id="habitaciones">
      <h1
        className="m-0 text-center mx-auto text-break"
        style={{
          fontWeight: "600",
          backgroundImage:
            "linear-gradient(225deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Habitaciones
      </h1>
      <svg width="0" height="0">
        <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FF0000" offset="0%" />
          <stop stopColor="#FF4848" offset="100%" />
        </linearGradient>
      </svg>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 mt-5">
        <div className={`${Styles.bed} col p-3 card border-0`}>
          <img
            src={Habitacion1}
            alt="Habitación1"
            className={`${Styles.imagen} rounded-3 shadow`}
            width="100%"
            style={{ objectFit: "cover" }}
          />
          <div
            className={`${Styles.content} card-body d-flex flex-column justify-content-center align-items-center`}
            style={{ height: "100px" }}
          >
            <h4
              className="d-flex align-items-center m-0"
              style={{ color: "#FFF" }}
            >
              {x}&nbsp;{habitacion1}
            </h4>
          </div>
        </div>
        <div className={`${Styles.bed} col p-3 card border-0`}>
          <img
            src={Habitacion2}
            alt="Habitación2"
            className={`${Styles.imagen} rounded-3 shadow`}
            width="100%"
            style={{ objectFit: "cover" }}
          />
          <div
            className={`${Styles.content} card-body d-flex flex-column justify-content-center align-items-center`}
            style={{ height: "100px" }}
          >
            <h4
              className="d-flex align-items-center m-0"
              style={{ color: "#FFF" }}
            >
              {y}&nbsp;{habitacion2}
            </h4>
          </div>
        </div>
        <div className={`${Styles.bed} col p-3 card border-0`}>
          <img
            src={Habitacion3}
            alt="Habitación3"
            className={`${Styles.imagen} rounded-3 shadow`}
            width="100%"
            style={{ objectFit: "cover" }}
          />
          <div
            className={`${Styles.content} card-body d-flex flex-column justify-content-center align-items-center`}
            style={{ height: "100px" }}
          >
            <h4
              className="d-flex align-items-center m-0"
              style={{ color: "#FFF" }}
            >
              {z}&nbsp;{habitacion3}
            </h4>
          </div>
        </div>
        <div className={`${Styles.bed} col p-3 card border-0`}>
          <img
            src={Habitacion4}
            alt="Habitación4"
            className={`${Styles.imagen} rounded-3 shadow`}
            width="100%"
            style={{ objectFit: "cover" }}
          />
          <div
            className={`${Styles.content} card-body d-flex flex-column justify-content-center align-items-center`}
            style={{ height: "100px" }}
          >
            <h4
              className="d-flex align-items-center m-0"
              style={{ color: "#FFF" }}
            >
              {w}&nbsp;{habitacion4}
            </h4>
          </div>
        </div>
      </div>
      <Link
        to="/habitaciones"
        className={`${Styles.button} mt-5 d-block mx-auto text-decoration-none btn btn-sm p-2 text-light rounded-pill btn-danger fs-6`}
        style={{ backgroundImage:
            "linear-gradient(90deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)", }}
      >
        Ver más
      </Link>
    </section>
  );
}

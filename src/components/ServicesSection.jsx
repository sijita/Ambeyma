import {
  IoBeerOutline,
  IoBedOutline,
  IoFootballOutline,
  IoWifiOutline,
  IoTicketOutline,
  IoWaterOutline,
} from "react-icons/io5";

export default function ServicesSection({
  servicio1,
  servicio2,
  servicio3,
  servicio4,
  servicio5,
  servicio6,
}) {
  return (
    <section
      className="p-5 d-flex flex-column gap-4 align-items-center my-5 bg-light"
      id="servicios"
    >
      <svg width="0" height="0">
        <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FF0000" offset="0%" />
          <stop stopColor="#FF4848" offset="100%" />
        </linearGradient>
      </svg>
      <h1
        className="m-0 flex-fill text-center"
        style={{
          fontWeight: "600",
          backgroundImage:
            "linear-gradient(225deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Nuestros servicios
      </h1>
      <div className="flex-fill row row-cols-1 row-cols-md-3">
        <div className="col p-xl-5">
          <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
            <IoBedOutline
              className="m-2 align-self-center"
              style={{ stroke: "url(#red-gradient)", width: "50px", fontSize: "30px" }}
            />
            <p
              className="d-inline m-0 align-self-center fs-5"
              style={{ width: "110px" }}
            >
              {servicio1}
            </p>
          </div>
          <div className="d-flex p-3 p-md-4 p-lg-5  justify-content-center justify-content-md-start">
            <IoWaterOutline
              className="m-2 align-self-center"
              style={{ stroke: "url(#red-gradient)", width: "50px", fontSize: "30px" }}
            />
            <p
              className="d-inline m-0 align-self-center fs-5"
              style={{ width: "110px" }}
            >
              {servicio2}
            </p>
          </div>
        </div>
        <div className="col p-xl-5">
          <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
            <IoBeerOutline
              className="m-2 align-self-center"
              style={{ stroke: "url(#red-gradient)", width: "50px", fontSize: "30px" }}
            />
            <p
              className="d-inline m-0 align-self-center fs-5"
              style={{ width: "110px" }}
            >
              {servicio3}
            </p>
          </div>
          <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
            <IoTicketOutline
              className="m-2 align-self-center"
              style={{ stroke: "url(#red-gradient)", width: "50px", fontSize: "30px" }}
            />
            <p
              className="d-inline m-0 align-self-center fs-5"
              style={{ width: "110px" }}
            >
              {servicio4}
            </p>
          </div>
        </div>
        <div className="col p-xl-5">
          <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
            <IoFootballOutline
              className="m-2 align-self-center"
              style={{ stroke: "url(#red-gradient)", width: "50px", fontSize: "30px" }}
            />
            <p
              className="d-inline m-0 align-self-center fs-5"
              style={{ width: "110px" }}
            >
              {servicio5}
            </p>
          </div>
          <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
            <IoWifiOutline
              className="m-2 align-self-center"
              style={{ color: "#FF0000", width: "50px", fontSize: "30px" }}
            />
            <p
              className="d-inline m-0 align-self-center fs-5"
              style={{ width: "110px" }}
            >
              {servicio6}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

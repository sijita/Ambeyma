import React from "react";
import Carousel from 'nuka-carousel';
import Piscina1 from "../images/banner.jpg";
import Piscina2 from "../images/imagen1.jpg";
import Piscina3 from "../images/piscina1.jpg";
import Piscina4 from "../images/piscina2.jpg";
import Piscina5 from "../images/piscina3.jpg";

export default function PiscinaCard() {
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
        Piscinas
      </h1>
      <Carousel
        autoplay={true}
        autoplayInterval={"2000"}
        withoutControls={true}
        wrapAround={true}
        pauseOnHover={true}
        className="rounded-3 mt-5"
        style={{height: "500px"}}
      >
        <img
          src={Piscina1}
          width="100%"
          height="500px"
          alt="imagen"
          style={{ objectFit: "cover" }}
          className="rounded"
        />
        <img
          src={Piscina2}
          width="100%"
          height="500px"
          alt="imagen"
          style={{ objectFit: "cover" }}
          className="rounded-3"
        />
        <img
          src={Piscina3}
          width="100%"
          height="500px"
          alt="imagen"
          style={{ objectFit: "cover" }}
          className="rounded"
        />
        <img
          src={Piscina4}
          width="100%"
          height="500px"
          alt="imagen"
          style={{ objectFit: "cover" }}
          className="rounded"
        />
        <img
          src={Piscina5}
          width="100%"
          height="500px"
          alt="imagen"
          style={{ objectFit: "cover" }}
          className="rounded"
        />
      </Carousel>
    </section>
  );
}

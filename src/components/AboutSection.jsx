import Video from "../images/video.mp4";
import Video2 from "../images/rutacafe.mp4";
import Imagen1 from "../images/promo.jpeg";
import Carousel from "nuka-carousel";

export function Card({ titulo, subtitulo, texto }) {
  return (
    <div className="row row-cols-1 row-cols-lg-2">
      <div className="my-5 p-lg-5 gap-4 col d-flex flex-column justify-content-center">
        <h1
          className="text-center m-0"
          style={{
            fontWeight: "600",
            backgroundImage:
              "linear-gradient(0deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 64%, 1) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {subtitulo}
        </h1>
        <h2 className="text-center m-0" style={{ fontWeight: "600" }}>
          {titulo}
        </h2>
        <p className="m-0 fs-5" style={{ textAlign: "justify" }}>
          {texto}
        </p>
      </div>
      <div className="col d-flex align-items-center p-0">
        <Carousel
          defaultControlsConfig={{
            nextButtonStyle: {
              backgroundColor: "black",
              opacity: 1,
              borderRadius: "10%",
            },
            prevButtonStyle: {
              backgroundColor: "black",
              opacity: 1,
              borderRadius: "10%",
            },
            nextButtonText: ">",
            prevButtonText: "<",
            pagingDotsClassName: "hidden",
            adaptiveHeight: true,
          }}
          style={{
            maxHeight: "343px",
          }}
        >
          <img
            src={Imagen1}
            alt="Promo"
            className="img-fluid rounded-3"
            style={{ objectFit: "contain", maxHeight: "343px" }}
          />
          <video
            src={Video}
            type="video/mp4"
            className="img-fluid rounded-3 react-player"
            width="100%"
            style={{ objectFit: "cover", maxHeight: "343px" }}
            controls
            loop
          />
          <video
            src={Video2}
            type="video/mp4"
            className="img-fluid rounded-3 react-player"
            width="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "400px",
            }}
            controls
            loop
          />
        </Carousel>
      </div>
    </div>
  );
}

export default function AboutSection({ titulo, subtitulo, texto }) {
  return (
    <section className="container p-5 my-lg-5" id="nosotros">
      <div className="card rounded-3 border-0">
        <Card titulo={titulo} subtitulo={subtitulo} texto={texto} />
      </div>
    </section>
  );
}

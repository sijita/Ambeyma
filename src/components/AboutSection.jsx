import Imagen1 from '../images/imagen1.jpg';

export function Card({ titulo, subtitulo, texto, imagen }) {
    return (
        <div className="row row-cols-1 row-cols-lg-2">
        <div className="p-sm-5 gap-4 col d-flex flex-column justify-content-center">
            <h1 className="text-center m-0" style={{fontWeight: '600', color: '#F23339'}}>{subtitulo}</h1>
            <h2 className="text-center m-0" style={{fontWeight: '600'}}>{titulo}</h2>
            <p className="m-0 fs-5" style={{textAlign: 'justify'}}>
                {texto}
            </p>
            <a href="/" className="mb-4 mb-sm-0 text-decoration-none btn btn-sm w-75 mx-auto p-2 text-light rounded-pill btn-danger fs-6" style={{backgroundColor: '#E32E33'}}>Más información</a>
        </div>
        <div className="col d-flex align-items-center">
            <img src={imagen} alt="Imagen" className="img-fluid rounded-3 shadow" width="100%" style={{objectFit: "cover", maxHeight: "400px"}} />
        </div>
    </div>
    )
}

export default function AboutSection({ titulo, subtitulo, texto }) {

    return (
            <section className="container p-5 my-lg-5" id="nosotros">
                <div className="card rounded-3 border-0">
                    <Card titulo={titulo} 
                    subtitulo={subtitulo} 
                    texto={texto}
                    imagen={Imagen1}
                    />
                </div>
            </section>
    );
}

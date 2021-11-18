const innerStyle = {
    boxSizing: "border-box",
    position: "absolute",
    width: "100%",
    bottom: "-5%",
    left: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
}

const Carousel = (slide, index) => <div key={index} className="text-center text-light rounded" style={{ background: `url('${slide.image}') no-repeat center center` }}>
        <div style={innerStyle}>
            <h2 style={{ textShadow: '0px 5px 10px #000000' }}>{slide.title}</h2>
            <div className="mb-3" style={{ textShadow: '0px 2px 5px #000000' }}>{slide.description}</div>
            <a className="btn btn-danger btn-sm rounded-pill shadow-sm" href="/" role="button">{slide.button}</a>
        </div>
    </div>;

export default Carousel
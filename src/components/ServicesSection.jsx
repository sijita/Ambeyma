import { IoBeerOutline, IoBedOutline, IoFootballOutline, IoWifiOutline, IoTicketOutline, IoWaterOutline } from 'react-icons/io5'

export default function ServicesSection({servicio1, servicio2, servicio3, servicio4, servicio5, servicio6}) {

return (
        <section className="p-5 d-flex flex-column gap-4 align-items-center my-5 bg-light" id="servicios">
            <h1 className="m-0 flex-fill text-center" style={{fontWeight: '600', color: '#F23339'}}>Nuestros servicios</h1>
                <div className="flex-fill row row-cols-1 row-cols-md-3">
                    <div className="col p-xl-5">
                        <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
                            <IoBedOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '50px', fontSize: '30px'}} /> 
                            <p className="d-inline m-0 align-self-center fs-5" style={{width: '110px'}}>{servicio1}</p>
                        </div>
                        <div className="d-flex p-3 p-md-4 p-lg-5  justify-content-center justify-content-md-start">
                            <IoWaterOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '50px', fontSize: '30px'}} />
                            <p className="d-inline m-0 align-self-center fs-5" style={{width: '110px'}}>{servicio2}</p>
                        </div>
                    </div>
                    <div className="col p-xl-5">
                        <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
                            <IoBeerOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '50px', fontSize: '30px'}} />
                            <p className="d-inline m-0 align-self-center fs-5" style={{width: '110px'}}>{servicio3}</p>
                        </div>
                        <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
                            <IoTicketOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '50px', fontSize: '30px'}} />
                            <p className="d-inline m-0 align-self-center fs-5" style={{width: '110px'}}>{servicio4}</p>
                        </div>
                    
                    </div>
                    <div className="col p-xl-5">
                        <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
                            <IoFootballOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '50px', fontSize: '30px'}} />
                            <p className="d-inline m-0 align-self-center fs-5" style={{width: '110px'}}>{servicio5}</p>
                        </div>
                        <div className="d-flex p-3 p-md-4 p-lg-5 justify-content-center justify-content-md-start">
                            <IoWifiOutline className="m-2 align-self-center" style={{color: '#E32E33', width: '50px', fontSize: '30px'}} />
                            <p className="d-inline m-0 align-self-center fs-5" style={{width: '110px'}}>{servicio6}</p>
                        </div>
                    </div>
                </div>
        </section>        
    )
}

import { Link, useParams } from "react-router-dom";

const Gracias = () => {
    const {orderId} = useParams();

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                     <div className="alert alert-warning p-5" role="alert">
                         <h1 className="fs-3 text-center">Gracias por comprar con nosotros!!!</h1>
                        <p className="text-center">Tu Orden de Compra es: <b>{orderId}</b></p>
                        <p><Link to={"/"} className="btn btn-dark mt-3">Volver al Inicio</Link></p>
                     </div>
                </div>
            </div>


        </div>
    )
}

export default Gracias;

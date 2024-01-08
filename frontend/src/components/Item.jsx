import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
            <div className="col-md-4 my-3">
                <div className="card card-personalizada border border-2">
                    
                    <img src={producto.foto} className="card-img-top " alt={producto.nombre} />
                    <div className="card-body align-middle">
                        <h3>{producto.nombre}</h3>
                        <p className="card-text">{/* <span className="text-secondary">{producto.descripcion}</span> */}<br /><b>${producto.precio}</b></p>
                        <Link to={"/item/" + producto.id} className="btn btn-dark">Ver más</Link>
                    </div>
                </div>
            </div>
    )
}

export default Item;
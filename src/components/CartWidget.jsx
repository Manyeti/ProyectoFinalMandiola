import IconoCarrito from "./images/carrito.webp"

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-outline-secondary position-relative ">
            <img src={IconoCarrito} alt={"Carrito"} width={35} />
                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
}

export default CartWidget;

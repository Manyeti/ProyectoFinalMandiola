import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import papelera from "./images/papelera.svg";
import { Link } from "react-router-dom";

const Cart =() => {
    const {cart, removeItem, clear, cartTotal, sumTotal} =useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert"> No se encontraron productos en el carrito !!!</div>
                    </div>
                </div>
            </div>
        )
    } 
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos Seleccionados</h1>
                </div><br></br><br></br>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-borderless">
                    <tbody>
                    <tr>
                       <td colSpan={4}>&nbsp;</td> 
                       <td className="text-end"><button className="btn btn-dark"  onClick={() => {clear()}} title="Vaciar Carrito">&nbsp;&nbsp;Vaciar Carrito&nbsp;&nbsp; </button></td>
                    </tr>    
                    {
                        cart.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                <td className="align-middle">{item.nombre}</td>
                                <td className="align-middle text-center ">{item.cantidad} x ${item.precio}</td>
                                <td className="align-middle text-center">${item.cantidad * item.precio}</td>
                                <td className="align-middle"><button className=" btn btn-light" onClick={() => {removeItem(item.id)}}><img src={papelera}  alt="Eliminar Producto"  width={40}/></button></td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={3} className="align-middle text-end">Total a Pagar</td>
                        <td className="align-middle text-center">${sumTotal()}</td>
                        <td className="align-middle text-end" ><Link to={"/checkout"} className="btn btn-dark">Finalizar Compra</Link></td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>    
        </div>
    )
}

export default Cart;
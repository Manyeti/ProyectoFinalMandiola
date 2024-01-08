import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore"; // agregar updateDoc para actualizar
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const {cart, sumTotal, clear} = useContext(CartContext);
    const [orderId, setOrderId] = useState("");


    const generarOrden = () => {
        

        if (nombre.length === 0) {
            return false;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }

       
        const buyer = {name:nombre, phone:telefono, email:email}
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.cantidad}))
        const fechaCompra = new Date();
        const date = `${fechaCompra.getFullYear()}-${fechaCompra.getDate()}-${fechaCompra.getMonth()+1} ${fechaCompra.getHours()}:${fechaCompra.getMinutes()}`;
        const total = sumTotal();
        const order = {buyer:buyer, items:items, date:date, total:total};
        //console.log(order);

        const db = getFirestore();
        const ComprasCollection = collection(db, "compras");
        addDoc(ComprasCollection, order).then(resultado =>{
            setOrderId(resultado.id);
            clear();
        })
        .catch(resultado => {
            console.log("No se pudo completar el proceso de compra !!!");
        });

        //Para Actualizar
      /*   const db = getFirestore();
        const orderDoc = doc(db, "compras", orderId);
        updateDoc(orderDoc, {total:1000}); */

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}></input>
                        </div>  
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}></input>
                        </div>  
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}></input>
                        </div>  
                        <button type="button" className="btn btn-dark" onClick={generarOrden}>Generer Orden</button>



                    </form>       
                </div>
                <div className="col-md-5">
                    <table className="table table-borderless">
                        <tbody>
                        {
                        cart.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                <td className="align-middle">{item.nombre}</td>
                                <td className="align-middle text-center ">{item.cantidad} x ${item.precio}</td>
                                <td className="align-middle text-center">${item.cantidad * item.precio}</td>
                            </tr>
                        ))
                        }
                        <tr>
                            <td colSpan={3} className="align-middle text-end">Total a Pagar</td>
                            <td className="align-middle text-center">${sumTotal()}</td>
                        </tr>
                       </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col"><br></br>
                    {orderId ? <Navigate to={"/gracias/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;

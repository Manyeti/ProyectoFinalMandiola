/* import { useState } from "react"; */
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    //const [visible, setVisible] = useState(true);
    return (
        <div>
            <ul className="nav justify-content-center p-3">
                <li className="nav-item">
                    <NavLink className="nav-link active text-dark" aria-current="page" to={"/"}>Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" to={"categorias/raqueta"}>Tennis</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" to={"categorias/padel"}>Padel</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark " to={"categorias/pelotas"}>Pelotas</NavLink>
                </li>
                
                <li className="nav-item">
                <div className=" text-end">
                    <CartWidget/>
                </div>
                </li> 
            </ul>
        
            {/* <div className="col-md-6 text-end">
            <CartWidget/>
            </div>  */}

        </div>    
    )
}

export default NavBar;

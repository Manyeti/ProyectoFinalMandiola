/* import CartWidget from "./CartWidget"; */
import NavBar from "./NavBar";
/* import Logo1 from "./images/pelota.jfif" */
import LogoFinal from "./images/pelota.jfif"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
           {/*  <div className="row bg-light p-3">
                <div className="col-md-6">
                    <img src={Logo1} alt={"Pelota"} width={50} />
                </div>
                <div className="col-md-6 text-end">
                    <a href="https://banco.santander.cl/personas" className="text-dark text-decoration-none">Buscar Tienda</a> | <a href="https://banco.santander.cl/personas" className="text-dark text-decoration-none">Ayuda</a>   
                </div>
            </div>  */}
            <div className="row bg-body-secundary p-3">
                <div className="col-md-6">
                    <Link to={"../"}><img src={LogoFinal} alt={"Pelota"} width={80}/></Link>TENNIS 4 ALL
                </div>
                <div className="col-md-6 text-center">
                    <NavBar/>
                </div>
                {/* <div className="col-md-4 text-end">
                   <CartWidget/>
                </div> */}
            </div>
        </div>
    )
}

export default Header;


import NavBar from "./NavBar";

import LogoFinal from "./images/pelota.jfif"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
           
            <div className="row bg-body-secundary p-3">
                <div className="col-md-6">
                    <Link to={"../"}><img src={LogoFinal} alt={"Pelota"} width={80}/></Link>TENNIS 4 ALL
                </div>
                <div className="col-md-6 text-center">
                    <NavBar/>
                </div>
                
            </div>
        </div>
    )
}

export default Header;

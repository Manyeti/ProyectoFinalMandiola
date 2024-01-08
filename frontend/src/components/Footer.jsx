
import Facebook from "./images/facebook3.png"
import Instagram from "./images/insta4.png"
import Twitter from "./images/twitter2.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
       <div className="container-fullwidth">
            <div className="footer-content">
                    <h3>TENNIS 4 ALL</h3>
                    <Link to={"http://www.google.com/"} ><img src={Facebook} alt={"Facebook"} width={40} /></Link>
                    <Link to={"http://www.google.com/"} ><img src={Instagram} alt={"Instagram"} width={40} /></Link>
                    <Link to={"http://www.google.com/"} ><img src={Twitter} alt={"Twitter"} width={40} /></Link>
                    <p>Esta pagina es de prueba para curso de CODERHOUSE</p>
            </div>
            <div className="footer-bottom">
                    <p>copyright &copy;2023 <Link to={"http://www.google.com/"}>TENNIS 4 ALL</Link>  </p>
            </div>   
        </div> 
        )
}

export default Footer;

import { Link } from "react-router-dom";

import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/propos">À propos</Link>
            </div>
        </div>
    );
};

export default Navbar;

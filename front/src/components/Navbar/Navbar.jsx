import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" height="50em" />
            </div>
            <div className="links">
                <a href="#accueil">Accueil</a>
                <a href="#propos">A Propos</a>
            </div>
        </div>
    );
};

export default Navbar;

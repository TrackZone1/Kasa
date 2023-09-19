import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
    const location = useLocation();

    useEffect(() => {
        document.querySelectorAll(".links a").forEach((link) => {
            link.classList.remove("active");
        });

        if (location.pathname === "/") {
            document
                .querySelector(".links")
                .querySelectorAll("a")[0]
                .classList.add("active");
        } else if (location.pathname === "/propos") {
            document
                .querySelector(".links")
                .querySelectorAll("a")[1]
                .classList.add("active");
        }
    }, [location]);

    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/propos">À Propos</Link>
            </div>
        </div>
    );
};

export default Navbar;

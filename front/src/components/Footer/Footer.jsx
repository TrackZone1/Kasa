import "./Footer.scss";
import Logo from "../../assets/images/light_logo.png";

const Footer = (props) => {
    return (
        <footer className="footer">
            <img src={Logo} alt="logo blanc" height="30em" />
            <p>© 2020. All rights reserved</p>
        </footer>
    );
};

export default Footer;

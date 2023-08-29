import { useNavigate } from "react-router";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
    const navigate = useNavigate();
    return (
        <div
            className="card"
            onClick={() => navigate("/fiche-logement/" + id)}
            style={{ cursor: "pointer", backgroundImage: `url(${cover})` }}
        >
            <div className="body">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card;

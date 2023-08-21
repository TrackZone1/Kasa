import "./Card.scss";

const Card = ({ title }) => {
    return (
        <div className="card">
            <div className="body">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card;

import "./Badge.scss";

const Badge = (props) => {
    return (
        <>
            <span className="badge">{props.children}</span>
        </>
    );
};

export default Badge;

import "./Collapse.scss";
import imgArrow from "../../assets/images/arrow.svg";

const Collapse = (props) => {
    function Open() {
        const content = document.querySelector(".content");
        const svg = document.querySelector(".header img");

        if (content.style.display === "none") {
            content.style.display = "flex";
            svg.style.transform = "rotate(0deg)";
        } else {
            content.style.display = "none";
            svg.style.transform = "rotate(180deg)";
        }
    }

    return (
        <>
            <div className="collapse">
                <div className="header" onClick={Open}>
                    <h3 className="title">{props.title}</h3>
                    <img
                        src={imgArrow}
                        height="32px"
                        width="32px"
                        className="rotate-icon"
                        alt="arrow"
                    />
                </div>
                <div className="content">{props.children}</div>
            </div>
        </>
    );
};

export default Collapse;

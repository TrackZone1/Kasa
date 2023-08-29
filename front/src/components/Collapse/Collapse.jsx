import "./Collapse.scss";
import imgArrow from "../../assets/images/arrow.svg";

const Collapse = (props) => {
    function Open() {
        document.querySelectorAll(".content").forEach((content) => {
            if (content.previousSibling.innerText === props.title) {
                if (content.style.display === "none") {
                    content.style.display = "flex";
                    content.previousSibling.lastChild.style.transform =
                        "rotate(0deg)";
                } else {
                    content.style.display = "none";
                    content.previousSibling.lastChild.style.transform =
                        "rotate(180deg)";
                }
            }
        });
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
                        style={{ transform: "rotate(180deg)" }}
                    />
                </div>
                <div className="content" style={{ display: "none" }}>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Collapse;

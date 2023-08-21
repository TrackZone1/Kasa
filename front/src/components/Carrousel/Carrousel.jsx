import React from "react";
import "./Carrousel.scss";
import imgArrow from "../../assets/images/arrow.svg";

const Carrousel = (props) => {
    const [currentImg, setCurrentImg] = React.useState();

    const allImages = props.images;

    if (allImages && allImages.length > 0 && !currentImg) {
        document.querySelector("#prevImg").addEventListener("click", () => {
            if (currentImg > 0) {
                setCurrentImg(allImages[currentImg - 1]);
            } else {
                setCurrentImg(allImages[allImages.length - 1]);
            }
        });

        document.querySelector("#nextImg").addEventListener("click", () => {
            if (currentImg < props.images.length - 1) {
                setCurrentImg(allImages[currentImg + 1]);
            } else {
                setCurrentImg(0);
            }
        });
    }

    return (
        <div className="carrousel">
            <img src={currentImg ?? props.images[0]} alt="carrousel" />
            <div className="navigation">
                <button type="button" id="prevImg">
                    <img src={imgArrow} alt="arrow" />
                </button>
                <button type="button" id="nextImg">
                    <img src={imgArrow} alt="arrow" />
                </button>
            </div>
            <p>1/{props.images.length}</p>
        </div>
    );
};

export default Carrousel;

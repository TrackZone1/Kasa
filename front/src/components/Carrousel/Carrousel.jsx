import React from "react";
import "./Carrousel.scss";
import imgArrow from "../../assets/images/arrow.svg";

const Carrousel = (props) => {
    const [currentImg, setCurrentImg] = React.useState(0);

    const allImages = props.images;

    function Next() {
        if (currentImg < allImages.length - 1) {
            setCurrentImg(currentImg + 1);
        } else {
            setCurrentImg(0);
        }
    }

    function Prev() {
        if (currentImg > 0) {
            setCurrentImg(currentImg - 1);
        } else {
            setCurrentImg(allImages.length - 1);
        }
    }

    return (
        <div className="carrousel">
            <img src={allImages[currentImg] ?? allImages[0]} alt="carrousel" />
            {allImages.length !== 1 && (
                <div className="navigation">
                    <button type="button" id="prevImg" onClick={() => Prev()}>
                        <img src={imgArrow} alt="arrow" />
                    </button>
                    <button type="button" id="nextImg" onClick={() => Next()}>
                        <img src={imgArrow} alt="arrow" />
                    </button>
                </div>
            )}
            {allImages.length !== 1 && (
                <p>
                    {currentImg + 1}/{allImages.length}
                </p>
            )}
        </div>
    );
};

export default React.memo(Carrousel);

import "./FicheLogement.scss";
import Carrousel from "../../components/Carrousel/Carrousel";

const FicheLogement = () => {
    return (
        <div className="ficheLogement">
            <Carrousel
                images={[
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
                ]}
            />
        </div>
    );
};

export default FicheLogement;

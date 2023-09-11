import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./FicheLogement.scss";
import Carrousel from "../../components/Carrousel/Carrousel";
import Badge from "../../components/Badge/Badge";
import Collapse from "../../components/Collapse/Collapse";

import starIcon from "../../assets/images/star.svg";
import starActiveIcon from "../../assets/images/starActive.svg";

const FicheLogement = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3000/fakeData/logements.json")
            .then((response) => response.json())
            .then((data) => {
                if (
                    data.filter((logement) => logement.id === id).length === 0
                ) {
                    navigate("/404");
                }
                setData(data.filter((logement) => logement.id === id)[0]);
            });
    }, []);

    return (
        <div className="ficheLogement">
            {data.pictures && <Carrousel images={data.pictures} />}
            <div className="content">
                <section className="infos">
                    <div className="title">
                        <h1>{data && data.title}</h1>
                        <p>{data && data.location}</p>
                        <div className="tags">
                            {data &&
                                data.tags &&
                                data.tags.map((tag) => <Badge>{tag}</Badge>)}
                        </div>
                    </div>
                    <div className="author">
                        <div className="avatar">
                            <p>{data.host && data.host.name}</p>
                            <img
                                src={data.host && data.host.picture}
                                alt="avatar"
                            />
                        </div>
                        <div className="rating">
                            <img
                                src={
                                    data.rating >= 1 ? starActiveIcon : starIcon
                                }
                                alt="star"
                            />
                            <img
                                src={
                                    data.rating >= 2 ? starActiveIcon : starIcon
                                }
                                alt="star"
                            />
                            <img
                                src={
                                    data.rating >= 3 ? starActiveIcon : starIcon
                                }
                                alt="star"
                            />
                            <img
                                src={
                                    data.rating >= 4 ? starActiveIcon : starIcon
                                }
                                alt="star"
                            />
                            <img
                                src={
                                    data.rating === "5"
                                        ? starActiveIcon
                                        : starIcon
                                }
                                alt="star"
                            />
                        </div>
                    </div>
                </section>
                <section className="extra">
                    <Collapse title="Description">
                        <p>{data && data.description}</p>
                    </Collapse>
                    <Collapse title="Équipements">
                        <ul>
                            {data &&
                                data.equipments &&
                                data.equipments.map((equipment) => (
                                    <li>{equipment}</li>
                                ))}
                        </ul>
                    </Collapse>
                </section>
            </div>
        </div>
    );
};

export default FicheLogement;

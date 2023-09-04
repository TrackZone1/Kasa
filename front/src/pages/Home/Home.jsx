import React from "react";

import "./Home.scss";
import background from "../../assets/images/bg1.png";
import Card from "../../components/Card/Card";

const Home = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3000/fakeData/logements.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <div className="home">
            <div className="background">
                <img src={background} alt="background" />
                <div className="overlay">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
            <div className="content">
                <div className="cards">
                    {data &&
                        data.map((logement) => (
                            <Card
                                id={logement.id}
                                title={logement.title}
                                cover={logement.cover}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

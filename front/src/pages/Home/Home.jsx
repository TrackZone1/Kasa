import "./Home.scss";
import background from "../../assets/images/bg1.png";
import Card from "../../components/Card/Card";

const Home = () => {
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
                    <Card title="Voyage" />
                    <Card title="Hébergement" />
                    <Card title="Activités" />
                    <Card title="Restauration" />
                    <Card title="Transport" />
                    <Card title="Shopping" />
                </div>
            </div>
        </div>
    );
};

export default Home;

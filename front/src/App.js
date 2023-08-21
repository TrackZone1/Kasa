import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Badge from "./components/Badge/Badge";
import Collapse from "./components/Collapse/Collapse";
import Carrousel from "./components/Carrousel/Carrousel";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <Collapse title="test">
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </Collapse>
                <Carrousel
                    images={[
                        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
                        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
                        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
                    ]}
                />
            </header>
        </div>
    );
}

export default App;

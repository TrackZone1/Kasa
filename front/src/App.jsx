import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App(props) {
    return (
        <div className="app">
            <div className="appNavbar">
                <Navbar />
            </div>
            <div className="appContent">{props.component}</div>
            <Footer />
        </div>
    );
}

export default App;

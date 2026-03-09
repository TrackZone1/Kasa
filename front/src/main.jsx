import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/Home/Home";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Error404 from "./pages/Error404/Error404";
import Propos from "./pages/Propos/Propos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<App component={<Home />} />}
                    StrictMode
                />
                <Route
                    path="/fiche-logement/:id"
                    element={<App component={<FicheLogement />} />}
                    StrictMode
                />
                <Route
                    path="*"
                    element={<App component={<Error404 />} />}
                    StrictMode
                />
                <Route
                    path="/propos"
                    element={<App component={<Propos />} />}
                    StrictMode
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();

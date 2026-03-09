import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders app layout with navigation and content", () => {
    render(
        <MemoryRouter>
            <App component={<div>Contenu de test</div>} />
        </MemoryRouter>,
    );

    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("À Propos")).toBeInTheDocument();
    expect(screen.getByText("Contenu de test")).toBeInTheDocument();
    expect(
        screen.getByText(/2020 kasa\. all rights reserved/i),
    ).toBeInTheDocument();
});

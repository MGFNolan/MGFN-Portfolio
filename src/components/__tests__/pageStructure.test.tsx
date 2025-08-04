import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";

import App from "../../App.tsx";

describe("the App component renders the Page, Header, and Main components", () => {
    it("renders a Page component with an id of page", () => {
        // Arrange
        render(<App />);

        //Act
        const component = screen.getByTestId("page");

        //Assert
        expect(component).toBeInTheDocument();
    });

    it("renders a Header component with an id of header", () => {
        // Arrange
        render(<App />);

        //Act
        const component = screen.getByTestId("header");

        //Assert
        expect(component).toBeInTheDocument();
    });

    it("renders a Main component with an id of main", () => {
        // Arrange
        render(<App />);

        //Act
        const component = screen.getByTestId("main");

        //Assert
        expect(component).toBeInTheDocument();
    });
});

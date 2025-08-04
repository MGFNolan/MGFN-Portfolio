import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";

import App from "../../App.tsx";

describe("the Page component renders a skip to main link for accessibility", () => {
    it("renders a skip to main link", () => {
        //Arrange
        render(<App />);

        //Act
        const skipToMain = screen.getByText("Skip to main content");

        //Assert
        expect(skipToMain).toBeInTheDocument();
    });
});

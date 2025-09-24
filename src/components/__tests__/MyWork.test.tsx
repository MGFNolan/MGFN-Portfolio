import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../../App.tsx";

describe("the WorkCard component renders with expected content", () => {
    it("renders an image, link, icons, details, and extra links", () => {
        //Arrange
        render(<App />);

        //Act
        const myWorkComponent = screen.getByTestId("my-work");

        //Assert
        expect(myWorkComponent).toBeInTheDocument();
    });
});

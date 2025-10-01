import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";
import Hero from "../Hero.tsx";

describe("Hero component renders with the required elements", () => {
    it("asserts that the Hero component has a section element with an id and aria label", () => {
        // Arrange
        render(<Hero />);

        // Act
        const heroSection = screen.getByTestId("hero");

        //Assert
        expect(heroSection).toBeInTheDocument();
        expect(heroSection).toHaveAttribute(
            "aria-label",
            "Hero section: introduction to Matthew Nolan's Portfolio"
        );
        expect(heroSection).toHaveAttribute("id", "hero");
    });

    it("asserts that the Hero component has a div element with a container class and relevant styling class", () => {
        // Arrange
        render(<Hero />);

        // Act
        const div = screen.getByTestId("hero-container");

        //Assert
        expect(div).toBeInTheDocument();
        expect(div).toHaveClass("hero__content");
    });

    it("asserts that the Hero component has a h1 element with the relevant text content for the title", () => {
        // Arrange
        render(<Hero />);

        // Act
        const h1 = screen.getByTestId("hero-title");

        //Assert
        expect(h1).toBeInTheDocument();
        expect(h1).toHaveTextContent("Matthew Nolan");
    });

    it("asserts that the Hero component has a p element with the relevant text content for the subtitle", () => {
        // Arrange
        render(<Hero />);

        // Act
        const p = screen.getByTestId("hero-subtitle");

        //Assert
        expect(p).toBeInTheDocument();
        expect(p).toHaveTextContent("Software Developer");
    });

    it("asserts that the Hero component has a p element with the text content directing the user further into the page", () => {
        // Arrange
        render(<Hero />);

        // Act
        const p = screen.getByTestId("hero-more");

        //Assert
        expect(p).toBeInTheDocument();
        expect(p).toHaveTextContent("My work, experience, and more");
    });
});

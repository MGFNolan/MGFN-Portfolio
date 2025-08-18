import { render, screen } from "@testing-library/react";

import { describe, it, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import MobileNav from "../MobileNav.tsx";

describe("the MobileNav component renders with all elements containing anchor links", () => {
    it("asserts that the MobileNav exists and has an aria-label", () => {
        // Arrange
        render(<MobileNav />);

        // Act
        const nav = screen.getByRole("navigation");

        // Assert
        expect(nav).toBeInTheDocument();
        expect(nav).toHaveAttribute("aria-label", "Mobile navigation");
    });

    it("should contain the relevant links", () => {
        // Arrange
        render(<MobileNav />);

        //Act
        const myWork = screen.getByRole("button", { name: "My Work" });
        const myExperience = screen.getByRole("button", {
            name: "My Experience",
        });
        const caseStudies = screen.getByRole("button", {
            name: "Case Studies",
        });
        const stats = screen.getByRole("button", { name: "Stats" });
        const contactMe = screen.getByRole("button", { name: "Contact" });

        //Assert
        expect(myWork).toBeInTheDocument();
        expect(myExperience).toBeInTheDocument();
        expect(caseStudies).toBeInTheDocument();
        expect(stats).toBeInTheDocument();
        expect(contactMe).toBeInTheDocument();
    });
});

describe("Hash URL Updates", () => {
    test("clicking my-work anchor button updates URL hash", async () => {
        // Arrange
        const user = userEvent.setup();
        render(<MobileNav />);

        // Act
        const myWorkNav = screen.getByRole("button", { name: "My Work" });
        expect(myWorkNav).toHaveAttribute("href", "#my-work");

        await user.click(myWorkNav);

        // Assert
        expect(window.location.hash).toBe("#my-work");
    });

    test("clicking my-experience anchor button updates URL hash", async () => {
        // Arrange
        const user = userEvent.setup();
        render(<MobileNav />);

        // Act
        const myExperienceNav = screen.getByRole("button", {
            name: "My Experience",
        });
        expect(myExperienceNav).toHaveAttribute("href", "#my-experience");

        await user.click(myExperienceNav);

        // Assert
        expect(window.location.hash).toBe("#my-experience");
    });

    test("clicking contact anchor button updates URL hash", async () => {
        // Arrange
        const user = userEvent.setup();
        render(<MobileNav />);

        // Act
        const contactNav = screen.getByRole("button", { name: "Contact" });
        expect(contactNav).toHaveAttribute("href", "#contact");

        await user.click(contactNav);

        // Assert
        expect(window.location.hash).toBe("#contact");
    });

    test("multiple anchor clicks update hash correctly in sequence", async () => {
        // Arrange
        const user = userEvent.setup();
        render(<MobileNav />);

        // Act
        const caseStudiesNav = screen.getByRole("button", {
            name: "Case Studies",
        });
        await user.click(caseStudiesNav);

        // Assert
        expect(window.location.hash).toBe("#case-studies");

        // Act
        const statsNav = screen.getByRole("button", { name: "Stats" });
        await user.click(statsNav);

        // Assert
        expect(window.location.hash).toBe("#stats");

        // Act
        const contactNav = screen.getByRole("button", { name: "Contact" });
        await user.click(contactNav);

        //Assert
        expect(window.location.hash).toBe("#contact");
    });
});

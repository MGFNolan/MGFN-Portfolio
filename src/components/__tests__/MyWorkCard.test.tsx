import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../../App.tsx";
import { WorkCardContent } from "../../utils/content.tsx";

describe("the WorkCard component renders with expected content", () => {
    it("renders the correct number of cards, each with an image, link, icons, details, and extra links", () => {
        //Arrange
        render(<App />);

        //Act
        const workCardComponents = screen.getAllByTestId("my-work-card");

        //Assert
        expect(workCardComponents).toHaveLength(WorkCardContent.length);

        workCardComponents.forEach((card) => {
            const image = within(card).getByTestId("work-card-image");
            const icons = within(card).getByTestId("work-card-icons");
            const details = within(card).getByTestId("work-card-details");
            const extraLinks = within(card).getAllByTestId(
                "work-card-extra-links"
            );

            expect(image).toBeInTheDocument();
            expect(icons).toBeInTheDocument();
            expect(details).toBeInTheDocument();
            extraLinks.forEach((extraLink) =>
                expect(extraLink).toBeInTheDocument()
            );
        });
    });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HelloWorld from "../HelloWorld";

describe("HelloWorld Component", () => {
    it('renders a paragraph with "Hello World!" text', () => {
        // Render the component
        render(<HelloWorld />);

        // Find the paragraph element with the text
        const paragraph = screen.getByText("Hello World!");

        // Assert it exists in the document
        expect(paragraph).toBeInTheDocument();

        // Optionally, also check it's a paragraph tag
        expect(paragraph.tagName).toBe("P");
    });
});

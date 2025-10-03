import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, afterEach } from "vitest";
import MyWorkModal from "../MyWorkModal";
import { WorkCardContent } from "../../utils/content";

const mockCard = WorkCardContent[0];
const mockOnClose = vi.fn();

afterEach(() => {
    vi.clearAllMocks();
});

describe("MyWorkModal component", () => {
    it("renders correctly with card content", () => {
        // Arrange
        render(<MyWorkModal myWorkCard={mockCard} onClose={mockOnClose} />);

        // Assert
        // Check for accessibility roles and labels
        const modal = screen.getByRole("dialog");
        expect(modal).toBeInTheDocument();
        expect(modal).toHaveAttribute("aria-modal", "true");
        expect(modal).toHaveAttribute("aria-labelledby", "modal-title");

        // Check for content from the mock card
        const title = screen.getByRole("heading", { name: mockCard.title });
        expect(title).toBeInTheDocument();
        expect(title).toHaveAttribute("id", "modal-title");

        expect(screen.getByText(mockCard.details)).toBeInTheDocument();

        // Check for links
        mockCard.extraLinks.forEach((link) => {
            const linkElement = screen.getByRole("link", { name: link.label });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute("href", link.href);
        });

        // Check for the close button
        expect(
            screen.getByRole("button", { name: "Close modal" })
        ).toBeInTheDocument();
    });

    it("calls onClose when the close button is clicked", async () => {
        // Arrange
        const user = userEvent.setup();
        render(<MyWorkModal myWorkCard={mockCard} onClose={mockOnClose} />);

        // Act
        const closeButton = screen.getByRole("button", { name: "Close modal" });
        await user.click(closeButton);

        // Assert
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when the Escape key is pressed", async () => {
        // Arrange
        const user = userEvent.setup();
        render(<MyWorkModal myWorkCard={mockCard} onClose={mockOnClose} />);

        // Act
        await user.keyboard("{Escape}");

        // Assert
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when the modal overlay is clicked", async () => {
        // Arrange
        const user = userEvent.setup();
        render(<MyWorkModal myWorkCard={mockCard} onClose={mockOnClose} />);

        // Act
        await user.click(screen.getByRole("dialog"));

        // Assert
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});

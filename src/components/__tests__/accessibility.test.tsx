// src/test/accessibility.test.tsx
import { render } from "@testing-library/react";
import { run } from "axe-core";
import { describe, it, expect } from "vitest";

const GoodComponent = () => (
    <div>
        <img src="test.jpg" alt="Test image" />
        <button>Good button</button>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
    </div>
);

describe("Accessibility Tests", () => {
    it("should not have accessibility violations", async () => {
        const { container } = render(<GoodComponent />);
        const results = await run(container);

        if (results.violations.length > 0) {
            console.log("Accessibility violations:", results.violations);
        }

        expect(results.violations).toHaveLength(0);
    });
});

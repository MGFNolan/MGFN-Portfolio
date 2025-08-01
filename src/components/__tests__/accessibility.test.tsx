// src/test/accessibility.test.tsx
import { render } from "@testing-library/react";
import { run } from "axe-core";
import { describe, it, expect } from "vitest";
import AccessibilityTest from "../AccessibilityTest";

describe("Accessibility Tests", () => {
    it("should not have accessibility violations", async () => {
        const { container } = render(<AccessibilityTest />);
        const results = await run(container);

        if (results.violations.length > 0) {
            console.log("Accessibility violations:", results.violations);
        }

        expect(results.violations).toHaveLength(0);
    });
});

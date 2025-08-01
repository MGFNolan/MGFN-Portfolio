import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
// Add these imports
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            // JSX parsing
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        // plugins section
        plugins: {
            react: react,
            "jsx-a11y": jsxA11y,
        },
        // rules section
        rules: {
            // React rules
            ...react.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",

            // Accessibility rules
            ...jsxA11y.configs.recommended.rules,
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/aria-role": "error",
            "jsx-a11y/no-noninteractive-element-interactions": "warn",
        },
        // settings section
        settings: {
            react: {
                version: "detect",
            },
        },
    },
]);

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
// Note: globalIgnores import might need adjustment - check if this exists
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config([
    { ignores: ["dist/**/*"] },
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            // These extends might need adjustment for flat config
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "jsx-a11y": jsxA11y,
        },
        rules: {
            ...react.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            ...jsxA11y.configs.recommended.rules,
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/aria-role": "error",
            "jsx-a11y/no-noninteractive-element-interactions": "warn",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
]);

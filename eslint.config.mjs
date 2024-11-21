import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",        // Disallow unused variables
      "no-unused-expressions": "error", // Disallow unused expressions
      "prefer-const": "error",          // Enforce usage of const where possible
      "no-console": "warn",             // Warn on console usage
      "no-undef": "error",             // Disallow usage of undefined variables
    },
    globals: {
      process: "readonly",             // Allow process to be used but not modified
    },
  },
];

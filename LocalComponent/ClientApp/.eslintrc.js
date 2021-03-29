module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-explicit-any": "off", // Too annoying but we can revisit this decision later
    "@typescript-eslint/explicit-module-boundary-types": "off", // Too annoying but we can revisit this decision later
    "react/no-unescaped-entities": "off", // Annoying and mistakes it's preventing are easily caught by TypeScript
    "react/prop-types": "off", // Not needed when using TypeScript
  },
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.test.ts"],
      env: {
        "jest/globals": true,
      },
      plugins: ["jest"],
    },
  ],
};

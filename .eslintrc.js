module.exports = {
  extends: ["airbnb", "airbnb-typescript", "next", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 12,
  },
  plugins: ["@typescript-eslint"],
  reportUnusedDisableDirectives: true,
  ignorePatterns: [".eslintrc.js"],
  rules: {
    // Next imports React automatically
    "react/react-in-jsx-scope": 0,
    // Error on default export, force named export
    "import/prefer-default-export": 0,
    "import/no-default-export": 2,
    // Prop spreading is used extensively by reakit
    "react/jsx-props-no-spreading": 0,
    // Force only arrow functions
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  overrides: [
    {
      files: ["src/pages/**"],
      rules: {
        // Next relies on pages exporting by default
        "import/prefer-default-export": 2,
        "import/no-default-export": 0,
      },
    },
  ],
};

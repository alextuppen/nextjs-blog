module.exports = {
  extends: ["airbnb-typescript", "prettier"],
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
  },
};

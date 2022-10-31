module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-use-before-define": "error",
    "no-use-before-define": "off",
    "prettier/prettier": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
}

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: "babel-eslint",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": [0, { forbid: ["any"] }],
    "react/prop-types": 0,
    "linebreak-style": [
      "error",
      process.env.NODE_ENV === "prod" ? "unix" : "windows",
    ],
    quotes: [2, "double", { avoidEscape: true }],
    "object-curly-newline": ["error", {multiline: true}]

  },
};

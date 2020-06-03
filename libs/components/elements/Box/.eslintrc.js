module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: { 
    ecmaVersion: 2020,            // Allows for the parsing of modern ECMAScript features
    sourceType: "module",         // Allows for the use of imports
    ecmaFeatures: { jsx: true },  // Allows for the parsing of JSX
  },
  settings:  {
    react:  {
      version:  'detect',         // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",    // Uses the recommended rules from @eslint-plugin-react
    "prettier/react",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  overrides: [{
    files: ["**/*.ts", "**/*.tsx"],
    // parse TypeScript files
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
    parser: "@typescript-eslint/parser",  // Specifies the Eslint parser
    parserOptions:  {
      ecmaVersion:  2020,                 // Allows for the parsing of modern ECMAScript features
      sourceType:  "module",              // Allows for the use of imports
      ecmaFeatures:  {
        legacyDecorators: true,
        jsx:  true,                       // Allows for the parsing of JSX
      },
    },
    env: {
      node: true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",                         // Uses the recommended rules from @eslint-plugin-react
      "plugin:@typescript-eslint/recommended",            // Use the recommended rules from the @typescript-eslint/eslint-plugin 
      "prettier/@typescript-eslint",                      // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      "prettier/react",
      "plugin:prettier/recommended",                      // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
      "no-var": "error",
      "space-before-function-paren": 0,
      "react/prop-types": 0,
      "react/jsx-handler-names": 0,
      "react/jsx-fragments": 0,
      "react/no-unused-prop-types": 0,
      "import/export": 0
    },
    settings:  {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      }
    }
  }]
};
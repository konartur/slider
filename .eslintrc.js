module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion: 12,
      sourceType: 'module',
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'prettier'
    ],
    rules: {},
};

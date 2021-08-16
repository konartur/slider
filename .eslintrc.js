module.exports = {
    parser: "@babel/eslint-parser",

    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
        'plugin:jest/recommended'
    ],
    plugins: ["jest"],
    rules: {},
};

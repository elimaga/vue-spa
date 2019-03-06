module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: "module"
    },
    extends: "standard",
    plugins: [
        "html"
    ],
    "rules": {
        "comma-dangle": 0,
        "indent": ["error", 4]
    }
};

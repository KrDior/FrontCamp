module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true
        },
        extends: ["eslint:recommended", "airbnb", "react-app"]
    },
    rules: {
        indent: ["error", 4],
        "no-param-reassign": [2, { props: false }],
        "no-console": 0,
        quotes: [2, "single", { avoidEscape: true }]
    }
};

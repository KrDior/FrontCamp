module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "airbnb-base"],
    "rules": {
        "indent": ["error", 4],
        "no-param-reassign": [2, {"props": false}],
        "no-console": 0,
        "quotes": [2, "single", { "avoidEscape": true }],
    },
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true

    },
};

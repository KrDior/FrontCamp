module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:sonarjs/recommended',
        'plugin:promise/recommended',
    ],
    plugins: ['react', 'jsx-a11y', 'optimize-regex', 'sonarjs', 'no-loops', 'no-use-extend-native', 'promise'],
    rules: {
        'react/jsx-filename-extension': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                packageDir: './',
            },
        ],
        "indent": ["error", 2],
        allowTernary: 0,
        'optimize-regex/optimize-regex': 'warn',
        'sonarjs/cognitive-complexity': ['error', 30],
        'no-loops/no-loops': 2,
        'no-use-extend-native/no-use-extend-native': 2,
        "react/jsx-props-no-spreading": "off",
        quotes: [2, 'single', { avoidEscape: true }],
    },
};

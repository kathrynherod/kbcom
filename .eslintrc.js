module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    extends: 'eslint:recommended',
    env: {
        browser: true,
        jquery: true,
        node: true,
    },
    globals: {
        moment: false
    },
    plugins: ['import'],
    rules: {
        'comma-dangle': ['error', 'only-multiline'],
        'func-names': ['off'],
        indent: ['error', 4, { 'SwitchCase': 1}],
        semi: ['error', 'always'],
        'space-before-function-paren': [2, 'never']
    }
};

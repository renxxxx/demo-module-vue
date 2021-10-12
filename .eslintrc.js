module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
    globals: {
        $: true,
        $ls: true,
        $global: true,
        $performance: true,
        $error: true,
        $log: true,
        dw: true,
        Vue: true
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-useless-escape': 0,
        'no-dupe-keys': 'error',
        'no-dupe-args': 'error',
        'no-trailing-spaces': 0,
        'block-scoped-var': 'error',

        'arrow-parens': 0,
        indent: ['error', 4],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        semi: ['error', 'always'],
        'eol-last': 0,
        'spaced-comment': 0,
        'one-var': 0,
        'space-before-function-paren': 0,
        'linebreak-style': 0,
        'no-mixed-spaces-and-tabs': 'error',
        'no-console': 0,
        eqeqeq: 2
    }
};

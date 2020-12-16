module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    rules: {
        indent: ['warn', 4],
        'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
        'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
        'space-before-function-paren': ['warn', 'never'],
        'no-use-before-define': ['error', 'always']
    }
}

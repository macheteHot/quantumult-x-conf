const globalVariablesList = ['$done', '$request', '$response']
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: globalVariablesList.reduce(
    (t, c) => ({ ...t, [c]: 'readonly' }),
    {},
  ),
  plugins: ['prettier'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'no-shadow': 'off',
    'prettier/prettier': ['error'],
    'no-console': ['off'],
    'no-debugger': ['error'],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': ['error'],
    'no-plusplus': ['off'],
    eqeqeq: 'error',
    'no-bitwise': ['off'],
  },
}

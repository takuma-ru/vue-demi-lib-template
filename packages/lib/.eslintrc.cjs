module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'comma-dangle': [ 'error', 'always-multiline' ],
    'semi': [ 'error', 'never', { 'beforeStatementContinuationChars': 'never' } ],
    'semi-spacing': [ 'error', { 'after': true, 'before': false } ],
    'semi-style': [ 'error', 'first' ],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-console': [ 'warn', { allow: [ 'warn', 'error' ] } ],
    'eol-last': [ 'error', 'always' ],
    'quotes': [ 2, 'single' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
  },
}

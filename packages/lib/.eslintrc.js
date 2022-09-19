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
    vue,
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
}
module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: ['plugin:vue/vue3-essential', 'standard', 'plugin:prettier/recommended', 'eslint:recommended'],
   overrides: [],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['vue', 'prettier'],
   rules: {},
};

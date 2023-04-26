/* eslint-disable @typescript-eslint/no-var-requires */
 
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['tailwindcss'],
  extends: ['plugin:tailwindcss/recommended','prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ["dist/", "node_modules/", ".turbo/"],
  rules: {
    'tailwindcss/no-custom-classname': 0
  }
};

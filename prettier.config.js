/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: "./tailwind.config.js",
  printWidth: 120,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};

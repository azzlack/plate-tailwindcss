/** @type {import('@jest/types').Config.InitialOptions} */

const jestConfig = {
  runner: 'jest-runner-eslint',
  testPathIgnorePatterns: ["/node_modules/", "dist/", "build/"],
  testMatch: ['<rootDir>/src/**/*.{js,ts,tsx}']
};

const config = {
  projects: [
    {
      displayName: 'test'
    },
    {
      displayName: 'lint',
      ...jestConfig,
    }
  ]
};

module.exports = config;

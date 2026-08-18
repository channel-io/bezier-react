/** @type {import('jest').Config} */
module.exports = {
  cacheDirectory: '.jestcache',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]sx?$': ['@swc/jest'],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testMatch: ['**/*.test.ts'],
}

/** @type {import('jest').Config} */
module.exports = {
  cacheDirectory: '.jestcache',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]sx?$': ['@swc/jest'],
  },
  testMatch: ['**/*.test.ts'],
}

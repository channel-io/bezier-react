/** @type {import('jest').Config} */
module.exports = {
  cacheDirectory: '.jestcache',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': ['@swc/jest'],
  },
}

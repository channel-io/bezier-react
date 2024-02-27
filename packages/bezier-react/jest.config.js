/** @type {import('jest').Config} */
module.exports = {
  cacheDirectory: '.jestcache',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\.[t|j]sx?$': ['@swc/jest'],
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '~(.*)$': '<rootDir>$1',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'src/index.ts',
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/*.stories.tsx',
  ],
}

module.exports = {
  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\.[t|j]sx?$': ['@swc/jest'],
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    'Components/(.*)$': '<rootDir>/src/components/$1',
    'Constants/(.*)$': '<rootDir>/src/constants/$1',
    '^Foundation$': '<rootDir>/src/foundation',
    'Foundation/(.*)$': '<rootDir>/src/foundation/$1',
    'Hooks/(.*)$': '<rootDir>/src/hooks/$1',
    'Providers/(.*)$': '<rootDir>/src/providers/$1',
    'Types/(.*)$': '<rootDir>/src/types/$1',
    'Utils/(.*)$': '<rootDir>/src/utils/$1',
    'Worklets/(.*)$': '<rootDir>/src/worklets/$1',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'src/components/Icon/generated/',
    'src/worklets/',
    'src/index.ts',
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/*.stories.tsx',
  ],
}

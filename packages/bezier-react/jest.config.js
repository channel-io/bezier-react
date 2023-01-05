module.exports = {
  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
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
    '~/src/components/(.*)$': '<rootDir>/src/components/$1',
    '~/src/constants/(.*)$': '<rootDir>/src/constants/$1',
    '~/src/foundation/(.*)$': '<rootDir>/src/foundation/$1',
    '~/src/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '~/src/layout/(.*)$': '<rootDir>/src/layout/$1',
    '~/src/providers/(.*)$': '<rootDir>/src/providers/$1',
    '~/src/types/(.*)$': '<rootDir>/src/types/$1',
    '~/src/utils/(.*)$': '<rootDir>/src/utils/$1',
    '~/src/worklets/(.*)$': '<rootDir>/src/worklets/$1',
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

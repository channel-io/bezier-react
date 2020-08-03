module.exports = {
  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}

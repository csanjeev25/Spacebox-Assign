const { defaults } = require('jest-config');
const fetch = require('node-fetch');
defaults.moduleFileExtensions = ['js', 'json', 'jsx', 'ts', 'tsx', 'node'];

module.exports = {
  verbose: true,
  silent: true,
  preset: 'react-native',
  moduleFileExtensions: defaults.moduleFileExtensions,
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/node_modules/react-native/jest/setup.js',
  ],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: ['<rootDir>/__tests__/**/*.test.js'],
  globals: {
    fetch,
  },
};
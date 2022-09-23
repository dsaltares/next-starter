const baseConfig = require('./jest.config');
const nextJest = require('next/jest');

module.exports = nextJest()({
  ...baseConfig,
  testRegex: 'tests-integration\\/.*\\.test\\.tsx?$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  coverageDirectory: 'coverage/integration',
});

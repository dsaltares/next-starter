const baseConfig = require('./jest.config');
const nextJest = require('next/jest');

module.exports = nextJest()({
  ...baseConfig,
  coverageDirectory: 'coverage/unit',
  testPathIgnorePatterns: ['tests-integration'],
});

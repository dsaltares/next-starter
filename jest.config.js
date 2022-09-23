const fs = require('fs');
const { parse: parseJsonWithComments } = require('comment-json');

require('dotenv').config({
  path: './.env.tests',
});

const getTsConfigPathAliases = () => {
  const tsConfig = parseJsonWithComments(
    fs.readFileSync('./tsconfig.json', 'utf-8')
  );

  return Object.entries(tsConfig.compilerOptions.paths).reduce(
    (aliases, [alias, aliasPaths]) => {
      const newAlias = `^${alias.replace('/*', '')}(.*)$`;
      const newAliasPath = `<rootDir>/${aliasPaths[0].replace('/*', '')}$1`;

      return {
        ...aliases,
        [newAlias]: newAliasPath,
      };
    },
    {}
  );
};

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage/unit',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.test.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
  ],
  moduleNameMapper: {
    ...getTsConfigPathAliases(),
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testPathIgnorePatterns: ['tests-integration'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};


// jest.config.js
//const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
// const { compilerOptions: { paths: tsconfigPaths } } = require('./tsconfig')


module.exports = {
  preset:'ts-jest',
  transform: {
		"^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.+\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"css",
		"scss"
  ],
  moduleNameMapper: {
    '^commonRedux/(.*)$': '<rootDir>/ClientApp/src/redux/$1',
    '^libs/(.*)$': '<rootDir>/ClientApp/src/libs/$1',
    '^consts$': '<rootDir>/ClientApp/src/consts.ts',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/ClientApp/__mocks__/fileMock.ts",
		"\\.(css|scss)$": "<rootDir>/ClientApp/__mocks__/styleMock.ts"
  }
};
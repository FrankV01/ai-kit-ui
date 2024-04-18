module.exports = {
  // The root directory of your project.
  rootDir: __dirname,

  // The test environment that will be used.
  //testEnvironment: "node",
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.unit.json",
      },
    ],
  },
  //testRegex: "(/__tests__/.*|(.|/)(test|spec)).tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // The test files that should be run.
  testMatch: ["**/__tests__/**/*.ts", "**/__tests__/**/*.tsx"],

  // The reporters that should be used.
  reporters: ["default"],

  // The coverage reporter that should be used.
  coverageReporters: ["json", "lcov"],

  // The path to the coverage report file.
  coveragePathIgnorePatterns: ["/node_modules/", "/__tests__/", "/__mocks__/"],

  // The maximum number of test files that should be run in parallel.
  //maxWorkers: 1,

  // The number of milliseconds to wait before killing a test that is running too long.
  testTimeout: 10000,

  setupFilesAfterEnv: ["./jest.setup.ts"],
};

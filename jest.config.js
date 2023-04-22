module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  //   testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node", "tsx"],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
};

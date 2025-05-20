module.exports = {
  moduleNameMapper: {
    "^API$": "<rootDir>/src/utils/API.js",  

  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)"
  ],

};

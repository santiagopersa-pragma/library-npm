module.exports = {
  verbose: true,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  collectCoverage: true,
  coverageReporters: ["html", "lcov", "text", "text-summary"],
  collectCoverageFrom: [
    "**/src/lib/**/*.ts",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/*.module.ts",
    "!**/*.spec.ts",
    "!**/main.ts",
    "!**/public-api.ts",
  ],
  transform: {
    "^.+\\.(ts|js|html)$": [
      "jest-preset-angular",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
        stringifyContentPathRegex: "\\.html$",
      },
    ],
  },
};

'use strict'

module.exports = {
  collectCoverage: true,
  coverageReporters: ['text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/**/index.js'
  ],
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/styleMock.js'
  }
}

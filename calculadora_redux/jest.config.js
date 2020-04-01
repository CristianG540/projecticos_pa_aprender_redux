module.exports = {
  rootDir: './',
  verbose: true,
  coverageReporters: ['html', 'text'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/.cache/**',
    '!**/coverage/**'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.cache/'
  ]
}

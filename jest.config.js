/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest-setup.ts'],
};

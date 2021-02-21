module.exports = {
	verbose: true,
	roots: ['<rootDir>/tests'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'^@/(.*)': '<rootDir>/src/$1',
	},
};

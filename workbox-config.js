module.exports = {
	globDirectory: 'Views/',
	globPatterns: [
		'**/*.html'
	],
	swDest: 'Views/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
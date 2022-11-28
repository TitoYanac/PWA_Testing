module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{gif,png,jpg,mp4,css,html,js,json}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
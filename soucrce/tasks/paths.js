'use strict';

//
//  P A T H S
//
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let root = './';
let source = root + 'src/';
let dist = root + 'dist/'

module.exports = {
	to: {
    root: root,
    source: source,
		liquid: {
      source: source + 'templates/',
			files: source + 'templates/*.liquid',
			destination: dist
		},
		scss: {
			source: source + 'scss/',
			files: source + 'scss/*.scss',
			destination: dist + 'css/'
		},
		js: {
			source: source + 'js/',
			files: source + 'js/app.js',
			destination: dist + 'js/',
			doc: dist + 'jsDoc/'
		},
		images: {
			source: source + 'img/',
			files: source + 'img/**/*.{jpg,jpeg,png,gif}',
			destination: dist + 'img/'
		},
		svg: {
			source: source + 'svg/',
			files: source + 'svg/**/*.svg',
			destination: dist + 'svg/'
    }
	}
};

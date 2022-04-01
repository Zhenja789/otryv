let mix = require('laravel-mix');
require('mix-html-builder');

mix
	.js('src/js/main.js', 'dist/js/main.js')
	.sass('src/sass/style.scss', 'dist/css/style.css')
	.html({
		htmlRoot: './src/index.html',
		output: 'dist',
		partialRoot: './src/partials',
		layoutRoot: './src/layouts',
		minify: {
			removeComments: true
		}
});

if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		server: {
			baseDir: "./dist",
		},
		files: ['dist/*.html', 'dist/css/*.css', 'dist/js/*.js'],
		notify: false,
		open: true
	});
}

mix.disableSuccessNotifications();
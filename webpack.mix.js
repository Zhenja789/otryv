let mix = require('laravel-mix');

mix
	.js('src/js/main.js', 'js/main.js')
	.sass('src/sass/style.scss', 'css/style.css');

if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		server: {
			baseDir: "./",
		},
		files: ['*.html', 'css/*.css', 'js/*.js'],
		notify: false,
		open: true
	});
}

mix.disableSuccessNotifications();
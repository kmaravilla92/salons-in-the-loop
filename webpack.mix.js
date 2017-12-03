let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.autoload({
	'jquery': ['$', 'window.jQuery', 'jQuery'],
	'vue': ['Vue','window.Vue'],   
	'moment': ['moment','window.moment'],   
});

mix.js('resources/assets/js/app.js', 'public/js')
   // .js('resources/assets/js/global.js', 'public/js')
   // .sass('resources/assets/sass/app.scss', 'public/css')
   .disableNotifications();

/*
 |--------------------------------------------------------------------------
 |
 |--------------------------------------------------------------------------
 */

// mix.js('resources/assets/backsite/js/app.js', 'public/backsite/js')
//    .sass('resources/assets/backsite/sass/app.scss', 'public/backsite/css')
//    .disableNotifications();
